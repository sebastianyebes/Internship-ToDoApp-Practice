"use client";
import "./page.css";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchTasks,
  AddTask,
  removeTask,
  putTask,
} from "./redux/features/task-slice";
import { useEffect, useState } from "react";

export default function Home() {
  const distpatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  let [input, setInput] = useState("");
  let [updatedTask, setUpdatedTask] = useState("");

  useEffect(() => {
    distpatch(fetchTasks());
  }, []);

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const updateTaskInputHandler = (e) => {
    setUpdatedTask(e.target.value);
  };

  const createTaskHandler = (e) => {
    distpatch(AddTask({ todo: input }));
    setInput("");
  };

  const removeTaskHandler = (id) => {
    distpatch(removeTask(id)).then(() => {
      distpatch(fetchTasks());
    });
  };

  const updateTaskHandler = (id, data) => {
    const taskToUpdate = tasks.tasks.find((task) => task.id === id);
    if (taskToUpdate) {
      const updatedTaskData = { ...taskToUpdate, todo: data };
      distpatch(putTask({ id, data: updatedTaskData })).then(() => {
        distpatch(fetchTasks());
        console.log(tasks);
      });
    }
  };

  return (
    <>
      <div className="page-title">
        <h1>Todo App</h1>
      </div>
      <div className="page-tasks">
        {tasks.tasks.length === 0 ? (
          <h1>No tasks</h1>
        ) : (
          <ul>
            {tasks.tasks.map((task, count) => (
              <div className="page-task" key={task.id}>
                <li>{task.todo}</li>
                <button
                  onClick={() => removeTaskHandler(task.id)}
                  className="task-button"
                >
                  Delete
                </button>
                <button
                  onClick={() => updateTaskHandler(task.id, updatedTask)}
                  className="task-button"
                >
                  Update
                </button>
                <input type="text" onChange={updateTaskInputHandler} />
              </div>
            ))}
          </ul>
        )}
      </div>
      <div className="page-forms">
        <label htmlFor="task">Input: </label>
        <input type="text" value={input} onChange={inputHandler} />
        <br />
        <button className="page-submit-button" onClick={createTaskHandler}>
          submit
        </button>
      </div>
    </>
  );
}
