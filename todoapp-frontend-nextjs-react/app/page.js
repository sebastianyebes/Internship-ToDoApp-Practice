"use client";
import "./page.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchTask, fetchTasks, createTask } from "./redux/features/task-slice";
import { useEffect } from "react";

export default function Home() {
  const distpatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  useEffect(() => {
    distpatch(fetchTasks());
  }, []);

  const handleTaskCreate = (e) => {};
  return (
    <>
      <div className="page-title">
        <h1>Todo App</h1>
      </div>
      <div className="page-tasks">
        <ul>
          {tasks.tasks.map((task) => (
            <li key={task.id}> {task.todo}</li>
          ))}
        </ul>
      </div>
      <div className="page-forms">
        <form action="">
          <label htmlFor="task">Input: </label>
          <input type="text" />
          <br />
          <button onClick={handleTaskCreate} className="page-submit-button">
            submit
          </button>
        </form>
      </div>
    </>
  );
}
