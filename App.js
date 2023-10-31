import React from "react";
import ReactDOM from "react-dom/client";

// const parent = React.createElement("div", { id: "parent" }, "hello");

const head = <h1>hello2</h1>;

const HeadingComponent = () => (
  <>
    {head}
    <h1>hello</h1>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
