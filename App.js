const heading = React.createElement(
  "h3",
  {
    id: "Title",
    className: "class",
    description: "react js",
    // style: { color: "red", backgroundColor: "pink", fontSize: "30px" },
  },
  "Hello,Via Injecting React,Heading 1"
);

const heading2 = React.createElement(
  "h3",
  {
    id: "Title",
    className: "class",
    description: "react js",
    // style: { color: "green", backgroundColor: "red", fontSize: "40px" },
  },
  "Hello,Via Injecting React,Heading 2"
);

const divContainer = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading, heading2]
);

console.log(heading); // at the end of the we got to know it's nothing but an "Object".
const roots = ReactDOM.createRoot(document.getElementById("root"));
//
roots.render(divContainer);