// useState 예제

import React, { useState } from "react";

export default function CountComponent() {
  const [count, setCount] = useState(0);

  // count 가 인자, setCount가 count를 변화시키는 함수
  //useState 는 훅
  //count를 0으로 생성 -> count가 state

  const addCount = () => {
    // 얘는 안되는 애
    // count = count + 1;

    setCount(count + 1);
  };

  return (
    <div>
      <div>초기값 : {count}</div>
      <button onClick={addCount}> 1 증가 </button>
    </div>
  );
}
