import { memo, useState } from "react";

import "./App.css";

const App = () => {
  const [header, setHeader] = useState("Header");
  const [text, setText] = useState("Hi");

  return (
    <div className="App">
      <div className="header">{header}</div>
      <div className="button_container">
        <button className="buttons" onClick={() => setHeader("New Header")}>
          Change Header
        </button>
        <button className="buttons" onClick={() => setText("Bye")}>
          Change Child Text
        </button>
      </div>

      {Array(500)
        .fill()
        .map((_, index) => (
          <ChildComponent key={index} text={text} />
        ))}
    </div>
  );
};

const ChildComponent = memo(({ text }) => {
  console.log("mounted");
  return <div className="child_component">{text}</div>;
});

export default App;
