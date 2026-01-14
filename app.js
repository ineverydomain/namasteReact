import React from "react";
import ReactDOM from "react-dom/client";

// const heading = (
//   <h1 id="jsx" tabIndex="5">
//     This is JSX
//   </h1>
// );

// React component - class based- old and functional - new (Use them)

const elem = <span>React element</span>;
const Title = () => (
  <div>
    <h2>This is Ttile component</h2>
    {elem}
  </div>
);
const title = <h2>Hello</h2>;

// component composition
const HeadingComponent = () => (
  <div>
    <Title />
    {100 + 200}
    {title}
    <h1>Namaste react Functional component</h1>
  </div>
);

// const heading = <h1>This is a compo</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
