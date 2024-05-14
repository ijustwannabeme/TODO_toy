import React from "react";

function Button({ color, onClick, buttonClicked }) {
  const handleButtonClicked = () => {
    onClick(color);
  };

  return (
    <button
      onClick={handleButtonClicked}
      style={{
        backgroundColor: color,
        border: buttonClicked ? "1px solid black" : "none",
        borderRadius: "50%",
        width: "10px",
        height: "10px",
        margin: "5px 5px",
      }}
      onMouseDown={handleButtonClicked}
      onMouseUp={handleButtonClicked}
    ></button>
  );
}

export default Button;
