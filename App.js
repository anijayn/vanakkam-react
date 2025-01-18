import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./images/image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

// React element created using createElement()
const heading1 = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "HELLOOOOO"),
    React.createElement("h2", {}, "BYEEEE"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "HELLOOOOO"),
    React.createElement("h2", {}, "BYEEEE"),
  ]),
]);

//React element created using JSX
const heading2 = <h1 className="heading2">Vanakkam React element from JSX!</h1>;

//React Functional component using JSX
const HeadingComponent = () => (
  <div>
    <TitleComponent />
    {heading2}
    <h1 className="heading3">Vanakkam React functional component from JSX!</h1>
  </div>
);

const title = <h1>Title element</h1>;
const TitleComponent = () => (
  <div>
    {title}
    <h1>Title component</h1>
  </div>
);

const titleElement = React.createElement(
  "div",
  { className: "title" },
  React.createElement("h1", {}, "This is a h1 tag"),
  React.createElement("h2", {}, "This is a h2 tag"),
  React.createElement("h3", {}, "This is a h3 tag")
);

const titleElementJSX = (
  <div>
    <h1 style={{ color: "red" }}>This is a h1 tag from JSX</h1>
    <h2 style={{ color: "blue" }}>This is a h2 tag from JSX</h2>
    <h3 style={{ color: "green" }}>This is a h3 tag from JSX</h3>
  </div>
);

const HeadingComponentJSX = () => <h4>HEADING</h4>;

const TitleComponentJSX = () => (
  <div>
    <HeadingComponentJSX />
    {titleElementJSX}
  </div>
);

const SearchComponent = () => (
  <div className="search-box">
    <form>
      <input type="text" placeholder="Search..."></input>
      <button type="submit">&#128269;</button>
    </form>
  </div>
);

const HeaderComponent = () => (
  <div className="header">
    <img src={logo} className="logo"></img>
    <SearchComponent />
    <FontAwesomeIcon icon={faUser} className="user-icon" />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
