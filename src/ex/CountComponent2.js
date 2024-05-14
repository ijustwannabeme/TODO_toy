import React, { useState, useEffect } from "react";

export default function CountComponent() {
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count + 1);
  };
  //   useState가 바뀔때마다 호출되는 함수 useEffect
  useEffect(() => {
    console.log("데이터 받아오기! (이 함수는 한번만)");
    return () => {
      console.log("메모리를 잡아먹으면...[더보기]", count);
    };
  }, []);
  //두번쨰 인자가 디펜던시 어레이
  useEffect(() => {
    console.log(`카운트가 증가할 때마다 실행! \n -count: ${count}`);
  }, [count]);
  //디펜던시 어레이에 있는 값이 바뀔때마다 실행

  return (
    <div>
      <div>초기값 : {count}</div>
      <button onClick={addCount}> 1 증가 </button>
    </div>
  );
}
