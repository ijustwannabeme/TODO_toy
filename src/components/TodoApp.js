import React, { useState } from "react";
import "./TodoApp.css";

function TodoApp() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [bgColor, setBgColor] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputText.trim() !== "") {
      setTodos([
        ...todos,
        { text: inputText, color: bgColor, margin: "10px 10px" },
      ]);
      setInputText("");
    }
  };

  const handleColorChange = (color) => {
    setBgColor(color);
  };

  return (
    <div>
      <h1
        style={{
          margin: "50px 0",
        }}
      >
        Todo App
      </h1>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        style={{
          backgroundColor: bgColor,
          marginBottom: "30px",
        }}
      />
      <button onClick={handleAddTodo}>입력</button>
      <div>
        {todos.map((todo, index) => (
          <div key={index} style={{ backgroundColor: todo.color }}>
            {todo.text}
          </div>
        ))}
      </div>
      <div>
        <button
          onClick={() => handleColorChange("white")}
          style={{
            backgroundColor: "white",
            className: "color-button",
          }}
        ></button>
        <button
          onClick={() => handleColorChange("red")}
          style={{
            backgroundColor: "red",
            className: "color-button",
          }}
        ></button>
        <button
          onClick={() => handleColorChange("yellow")}
          style={{
            backgroundColor: "yellow",
            className: "color-button",
          }}
        ></button>
        <button
          onClick={() => handleColorChange("pink")}
          style={{
            backgroundColor: "pink",
            className: "color-button",
          }}
        ></button>
      </div>
    </div>
  );
}

export default TodoApp;
