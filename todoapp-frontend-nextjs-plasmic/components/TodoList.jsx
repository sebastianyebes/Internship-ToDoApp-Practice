import { PlasmicTodoList } from "./plasmic/todo_app_practice/PlasmicTodoList";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../pages/redux/features/task-slice";
import { useEffect, useState, forwardRef } from "react";
import TaskListItem from "./TaskListItem";

function TodoList_(props, ref) {
  const distpatch = useDispatch();
  const [input, setInput] = useState("");
  const todos = useSelector((state) => state.tasks);

  useEffect(() => {
    distpatch(fetchTasks());
  }, []);

  const inputTextHandler = (e) => {
    setInput(e.target.value);
    console.log(input);
  };

  return (
    <PlasmicTodoList
      todoList={{ ref }}
      {...props}
      taskList={{
        wrapChildren: (children) =>
          todos?.tasks.map((task) => (
            <TaskListItem key={task.id} task={task.todo} />
          )),
      }}
      textInput={{
        onChange: inputTextHandler,
      }}
    />
  );
}

const TodoList = forwardRef(TodoList_);

export default TodoList;
