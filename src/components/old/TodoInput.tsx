import { useState } from "react";

type TodoInputProps = {
  addTodo: (title: string) => void;
};
const TodoInput = ({ addTodo }: TodoInputProps) => {
    const [text, setText] = useState<string>("");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }
    const handleAdd = () => {
        if (!text.trim()) return;
        addTodo(text);
        setText("");
    }
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Enter todo..."
      />
      <button onClick={handleAdd}>
        Add Todo
      </button>
    </div>
  )
}

export default TodoInput
