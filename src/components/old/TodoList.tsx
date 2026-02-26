import type { Todo } from "../../types";
import TodoItem from "./TodoItem";

type TodoListProps = {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
};

const TodoList = ({
  todos,
  toggleTodo,
  deleteTodo,
}: TodoListProps) => {
  return (
    <div>
      {todos.length === 0 ? (
        <p>No Todos Available</p>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))
      )}
    </div>
  );
};

export default TodoList;