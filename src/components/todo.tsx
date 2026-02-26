import { useState } from "react";

const Todo = () => {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState<string[]>([]);
  const handleTaskadd = () => {
    if (task.trim() === "") return;
    setTodo((prev) => [...prev, task]);
    setTask("");
  };
  const handleDel = (index:number) => {
    const newTodo = todo.filter((_,i) => i !== index)
    setTodo(newTodo)
  }
  return (
    <div>
      <input
        type="text"
        placeholder="enter task here.."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleTaskadd}>Add</button>
      <hr />
      <table border={1} style={{ width: "70%", borderCollapse: "collapse" }}>
        <tbody>
          <tr>
            <td>ID</td>
            <td>UserName</td>
            <td>Action</td>
          </tr>
          {todo.map((item, index) => (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{item}</td>
                <td><button onClick={() => handleDel(index) }>X</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Todo;
