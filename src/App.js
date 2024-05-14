// // import logo from "./logo.svg";
// // import "./App.css";
// // import Hello from "./components/Hello";
// import CaptionImage from "./components/CaptionImage";
// import BlinkComponent from "./components/blink";
// import CountComponent from "./components/CountComponent";
// import CountComponent from "./components/CountComponent2";
// import { useState } from "react";

// import { useState } from "react";
// import calculatePrimes from "./components/PrimeCalculator";

// import FocusInputButton from "./components/RegisterInputButton";
// import PrimeCalculator from "./components/PrimeCalculator";

import MyPage from "./components/MyPage";
import ThemeButton from "./components/ThemeButton";
import { ThemeProvider } from "./components/ThemeProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoApp from "./components/TodoApp_Ex";

function App() {
  // const [showCount, setShowCount] = useState(true);
  // //객체로 css 전달하기
  // // const centerStyle = {
  // //   textAlign: "center",
  // //   color: "violet",
  // // };

  // return (
  //   <div className="App">
  //     {/* <div style={centerStyle}>
  //       <Hello />
  //     </div> */}
  //     <button
  //       onClick={(e) => {
  //         setShowCount(!showCount);
  //       }}
  //     >
  //       버튼
  //     </button>
  //     {showCount ? <CountComponent /> : null}
  //     <div
  //       style={{ textAlign: "center", color: "cadetblue", fontSize: "50px" }}
  //     >
  //       <CaptionImage
  //         imgUrl="https://search2.kakaocdn.net/argon/229x0_80_wr/896LDoHNtoM"
  //         caption="이토 준지"
  //       ></CaptionImage>
  //       {/* <BlinkComponent text="Hello!" /> */}
  //       {/* <CountComponent /> */}
  //     </div>
  //   </div>
  // );

  // useRef 예제
  // return
  //   <div>
  //     <FocusInputButton></FocusInputButton>
  //   </div>
  // );

  // useMemo 예제
  return (
    <div style={{ textAlign: "center" }}>
      <TodoApp></TodoApp>
    </div>
  );

  //useContext 예제

  // return (
  //   <ThemeProvider>
  //     <ThemeButton></ThemeButton>
  //     <MyPage></MyPage>
  //   </ThemeProvider>
  // );
}

export default App;
