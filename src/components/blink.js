import React, { useEffect, useState } from "react";
//훅의 리턴값은 배열

export default function BlinkComponent({ text }) {
  const [showText, setShowText] = useState(true);

  //   useEffect(() => {
  //     const timeoutId = setInterval(() => {
  //       setShowText((showText) => !showText);
  //     }, 1000);
  //     //1000 밀리초, 1초에 한번씩 함수를 호출한다.
  //     return () => {
  //       clearInterval(timeoutId);
  //     };
  //   }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("호출");
      setShowText(!showText);
    }, 3000);
    return () => {
      clearInterval(intervalId);
    };
  }, [showText]);

  return <div>{showText ? text : null}</div>;
}
