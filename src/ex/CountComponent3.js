import React, { useCallback, useEffect, useState } from "react";

export default function CountComponent() {
  const [count, setCount] = useState(0);

  const addCount = useCallback(
    (count) => {
      setCount(count);
    },
    [setCount]
  );
}

return (
  <div>
    <div>초기값 : {count}</div>
    <button
      onClick={(e) => {
        addCount(count + 1);
      }}
    >
      {" "}
      1 증가{" "}
    </button>
  </div>
);
