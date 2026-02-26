import type { Todo } from "../../types";

type TodoItemProps = {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
};

const TodoItem = ({
  todo,
  toggleTodo,
  deleteTodo,
}: TodoItemProps) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />

      <span
        style={{
          textDecoration: todo.completed
            ? "line-through"
            : "none",
        }}
      >
        {todo.title}
      </span>

      <button onClick={() => deleteTodo(todo.id)}>
        Delete
      </button>
    </div>
  );
};

export default TodoItem;