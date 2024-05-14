import React, { useState } from "react";
import "./TodoApp.css";
import Input from "./TodoInput";
import Button from "./TodoButtons";
import Search from "./TodoSearch";

function TodoApp() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [bgColor, setBgColor] = useState("");
  const [searchText, setSearchText] = useState("");

  //함수 선언부
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputText.trim() !== "") {
      setTodos([
        ...todos,
        {
          id: (todos.length + 1).toString(),
          text: inputText,
          color: bgColor,
          margin: "10px 10px",
          border: "solid 2px black",
        },
      ]);
      setInputText("");
    }
  };

  const searchInputText = (e) => {
    setSearchText(e.target.value);
  };

  const handleColorChange = (color) => {
    setBgColor(color);
  };

  const handleSearch = () => {
    setTodos(
      todos.map((todo) => ({
        ...todo,
        border: todo.text.startsWith(searchText) ? "solid 3px red" : "solid 2px black",
      })),
    );
  };
  const deleteButtonClick = (id) => {
    console.log(id);
    const itemId = id;

    // itemId와 일치하지 않는 아이템만 남기고 새로운 배열을 만듭니다.
    const updatedTodos = todos.filter((todo) => todo.id !== itemId);

    // 새로운 배열을 설정하여 todos를 업데이트합니다.
    setTodos(updatedTodos);
  };

  //함수 선언 부분을 다른 파일로 독립적으로 관리할 수 있는가?

  return (
    <div>
      <h1
        style={{
          margin: "50px 0",
        }}
      >
        📅 <b>Todo App</b> 📅
      </h1>
      <Input value={inputText} onChange={handleInputChange} bgColor={bgColor} onAdd={handleAddTodo}></Input>

      <Search value={searchText} onChange={searchInputText} onSearch={handleSearch}></Search>

      <h2 style={{ margin: "10px 0" }}>Todo Items</h2>

      <div>
        <Button color="antiquewhite" onClick={handleColorChange} />
        <Button color="orange" onClick={handleColorChange} />
        <Button color="yellow" onClick={handleColorChange} />
        <Button color="pink" onClick={handleColorChange} />
        <Button color="skyblue" onClick={handleColorChange} />
      </div>

      <div>
        <ul>
          {todos.map((todo) => (
            <li
              value={todo.id}
              style={{
                border: todo.border,
                backgroundColor: todo.color,
                margin: "10px auto",
                listStyle: "none",
              }}
              onClick={(e) => {
                console.log(e);
              }}
              // onClick={() => {
              //   console.log("수정");
              // }}
              // onClick={(e) => deleteButtonClick(e)}
            >
              <input
                defaultValue={todo.text}
                id={todo.id}
                disabled={todo.disabled}
                onClick={() => {
                  setTodos((prevTodos) => {
                    return prevTodos.map((item) => {
                      if (item.id === todo.id) {
                        return { ...item, disabled: false };
                      }
                      return item;
                    });
                  });
                }}
                onChange={(e) => {
                  const newText = e.target.value;
                  setTodos((prevTodos) => {
                    return prevTodos.map((item) => {
                      if (item.id === todo.id) {
                        return { ...item, text: newText };
                      }
                      return item;
                    });
                  });
                }}
              />

              <button
                onClick={() => {
                  console.log("수정된 값 반영");
                }}
              >
                수정
              </button>

              <button type="button" class="btn btn-danger" onClick={() => deleteButtonClick(todo.id)}>
                삭제
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoApp;
