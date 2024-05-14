import React from "react";

function Input(props) {
  return (
    <div>
      <input
        type="text"
        value={props.value}
        onChange={props.onChange}
        style={{
          backgroundColor: props.bgColor,
          marginBottom: "30px",
        }}
      ></input>

      <button onClick={props.onAdd}>입력</button>
    </div>
  );
}

export default Input;
