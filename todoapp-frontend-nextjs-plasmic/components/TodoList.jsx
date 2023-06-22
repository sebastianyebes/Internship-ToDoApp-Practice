import * as React from "react";
import { PlasmicTodoList } from "./plasmic/todo_app_practice/PlasmicTodoList";

function TodoList_(props, ref) {
  return <PlasmicTodoList todoList={{ ref }} {...props} />;
}

const TodoList = React.forwardRef(TodoList_);

export default TodoList;
