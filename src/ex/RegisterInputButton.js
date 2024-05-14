import React, { useRef } from "react";

export default function FocusInputButton() {
  const inputRef = useRef();
  //Dom 객체의
  //변수인데 엘리먼트 참조 가능

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <button onClick={focusInput}>입력하러 가기</button>
      <div style={{ height: 2000 }}></div>
      <input ref={inputRef} type="text"></input>
      <div style={{ height: 2000 }}></div>
    </div>
  );
}
