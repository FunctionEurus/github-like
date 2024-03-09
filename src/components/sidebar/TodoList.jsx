import { useState } from "react";

function TodoList() {
  const [value, setValue] = useState("");
  //   let messages = [];
  // 只有state改变react才会重渲染啊哥！
  const [messages, setMessages] = useState([]);
  function handleClick() {
    // messages.push(value);
    setMessages([...messages, value]);
    setValue("");
  }

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button type="button" onClick={handleClick}>
        Click me
      </button>
      {messages.map((message, index) => (
        <p key={`${index} ${message}`}>{message}</p>
      ))}
    </div>
  );
}

export default TodoList;

// 3/8小厂面试在线被拷打
