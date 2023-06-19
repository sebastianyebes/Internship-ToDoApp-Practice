"use client";
import "./page.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/features/count-slice";

export default function Home() {
  const count = useSelector((state) => state.counter);
  const distpatch = useDispatch();

  function add() {
    distpatch(increment(count));
  }
  function minus() {
    distpatch(decrement(count));
  }

  return (
    <>
      <div className="page-title">
        <h1>Todo App</h1>
      </div>
      <div className="page-tasks">
        <ul>
          <li>{count}</li>
          <li>tasks</li>
        </ul>
      </div>
      <button onClick={add}>add</button>
      <button onClick={minus}>decrement</button>
      <div className="page-forms">
        <form action="">
          <label htmlFor="task">Input: </label>
          <input type="text" />
          <br />
          <input type="submit" value="Submit" className="page-submit-button" />
        </form>
      </div>
    </>
  );
}
