import { useState } from "react";
import TodoItem from "./TodoItem";
import "./App.css";

/* let idnumber = 1; */
function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  function handleOnChange(event) {
    setInput(event.target.value);
  }

  function handleSubmit() {
    const todoObj = {
      id: Date.now() /* idnumber++ */,
      title: input,
      done: false,
    };

    setList([...list, todoObj]);
    setInput("");
  }

  function handleRemove(removeId) {
    setList(list.filter((t) => t.id !== removeId));
  }

  function handleDone(doneId, isDone) {
    const newList = list.map((item) => {
      if (item.id == doneId) {
        return { ...item, done: !isDone };
      }
      return item;
    });

    setList(newList);
  }

  const todoList = list.map((todoObj) => (
    <TodoItem
      todoObj={todoObj}
      handleDone={handleDone}
      handleRemove={handleRemove}
    />
  ));

  return (
    <div>
      <h1>Todo List</h1>
      <input value={input} type="text" onChange={handleOnChange} />
      <button onClick={handleSubmit}>add</button>
      <ol>{todoList}</ol>
    </div>
  );
}

export default App;
