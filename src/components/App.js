import React from "react";
import "../styles/App.css";
import slides from "../data";

const App = () => {
  let [current, SetCurrent] = React.useState(0);
  return (
    <>
      <h1 data-testid="title">{slides[current].title}</h1>
      <p data-testid="text">{slides[current].text}</p>
      <button data-testid="button-restart">restart</button>
      <button
        data-testid="button-next"
        onClick={() => SetCurrent(current + 1)}
        disabled={current === slides.length - 1 ? true : false}
      >
        next
      </button>
      <button
        data-testid="button-prev"
        onClick={() => SetCurrent(current - 1)}
        disabled={current === 0 ? true : false}
      >
        prev
      </button>
    </>
  );
};

export default App;
