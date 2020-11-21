import React from "react";
import "../styles/App.css";

const App = (props) => {
  let [current, SetCurrent] = React.useState(0);
  return (
    <>
      <h1 data-testid="title">{props.slides[current].title}</h1>
      <p data-testid="text">{props.slides[current].text}</p>
      <button
        data-testid="button-restart"
        onClick={() => SetCurrent(0)}
        disabled={current === 0 ? true : false}
      >
        Restart
      </button>
      <button
        data-testid="button-next"
        onClick={() => SetCurrent(current + 1)}
        disabled={current === props.slides.length - 1 ? true : false}
      >
        Next
      </button>
      <button
        data-testid="button-prev"
        onClick={() => SetCurrent(current - 1)}
        disabled={current === 0 ? true : false}
      >
        Prev
      </button>
    </>
  );
};

export default App;
