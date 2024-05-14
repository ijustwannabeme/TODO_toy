// UpdateButton.js

import React, { useState } from "react";

const UpdateButton = (e, todos, setTodos) => {
  const [updatedText, setUpdatedText] = useState("");
  const itemId = e.target.getAttribute("value");

  if (updatedText.trim() !== "") {
    const updatedTodos = todos.map((todo) => (itemId === todo.id ? { ...todo, text: updatedText } : todo));
    setTodos(updatedTodos);
    setUpdatedText(""); // 입력 필드 초기화
  }
};

export default UpdateButton;
