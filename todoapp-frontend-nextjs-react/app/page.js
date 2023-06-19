"use client";
import "./page.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchTasks, AddTask } from "./redux/features/task-slice";
import { useEffect, useState } from "react";

export default function Home() {
  const distpatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  let [input, setInput] = useState("");

  useEffect(() => {
    distpatch(fetchTasks());
  }, []);

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const createTaskHandler = (e) => {
    distpatch(AddTask({ todo: input }));
    setInput("");
  };

  return (
    <>
      <div className="page-title">
        <h1>Todo App</h1>
      </div>
      <div className="page-tasks">
        <ul>
          {tasks?.tasks.map((task) => (
            <li key={task.id}> {task.todo}</li>
          ))}
        </ul>
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
