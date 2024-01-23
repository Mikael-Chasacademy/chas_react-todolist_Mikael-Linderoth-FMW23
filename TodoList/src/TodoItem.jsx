export default function TodoItem({ todoObj, handleDone, handleRemove }) {
  return (
    <li className="lista">
      <button onClick={() => handleDone(todoObj.id, todoObj.done)}>
        {todoObj.done ? "Undo" : "Done"}
      </button>
      {/* {todoObj.id}
      <div classname={todoObj.done ? "done" : "not-done"}>{todoObj.title}</div>
      <button onClick={() => handleRemove(todoObj.id)}>Remove</button> */}
      {/* <span>#: {todoObj.id} </span> */}
      <input
        type="text"
        value={todoObj.title}
        style={{ textDecoration: todoObj.done ? "line-through" : "none" }}
        readOnly
      />
      <button onClick={() => handleRemove(todoObj.id)}>Remove</button>
    </li>
  );
}
