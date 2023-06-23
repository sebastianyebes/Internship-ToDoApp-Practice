import { PlasmicTodoList } from "./plasmic/todo_app_practice/PlasmicTodoList";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTasks,
  AddTask,
  removeTask,
} from "../lib/redux/features/task-slice";
import { setInput } from "../lib/redux/features/input-slice";
import { useEffect, forwardRef } from "react";
import TaskListItem from "./TaskListItem";

function TodoList_(props, ref) {
  const distpatch = useDispatch();
  const input = useSelector((state) => state.input);
  const todos = useSelector((state) => state.tasks);

  useEffect(() => {
    distpatch(fetchTasks());
  }, []);

  const textInputHandler = (e) => {
    distpatch(setInput(e.target.value));
    console.log(input);
  };

  const addTaskHandler = async (data) => {
    await distpatch(AddTask(data));
    distpatch(setInput(""));
    console.log(data);
  };

  const removeTaskHandler = (id) => {
    distpatch(removeTask(id)).then(() => {
      distpatch(fetchTasks());
    });
  };

  return (
    <PlasmicTodoList
      todoList={{ ref }}
      {...props}
      taskList={{
        wrapChildren: (children) =>
          todos.tasks.length > 0 ? (
            todos?.tasks?.map((task) => (
              <TaskListItem
                key={task.id}
                task={task.todo}
                deleteButton={{ onClick: () => removeTaskHandler(task.id) }}
              />
            ))
          ) : (
            <div></div>
          ),
      }}
      addButton={{
        onClick: () => addTaskHandler({ todo: input }),
      }}
      textInput={{
        value: input,
        onChange: textInputHandler,
      }}
    />
  );
}

const TodoList = forwardRef(TodoList_);

export default TodoList;
