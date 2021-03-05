import React from "react";
import { render } from "react-dom";
import "./css/index.css";
import Demo from "./examples/Demo.js";
import SimpleTooltip from "./examples/SimpleTooltip.js";
import SimpleMenu from "./examples/SimpleMenu.js";
import InputFocus from "./examples/InputFocus.js";
import ToolTipPosition from "./examples/ToolTipPositions";
import NestedToolTip from "./examples/NestedToolTip.js";
import TooltipKeepInside from "./examples/TooltipKeepInside";

const App = () => (
  <div>
    <h1>
      Reactjs-popup Examples :
      <a href="http://react-popup.elazizi.com/">
        http://react-popup.elazizi.com/
      </a>
    </h1>
    <Demo />
    <h3>Reactjs-popup onFocus </h3>
    <InputFocus />
    <h3>Reactjs-popup simple tooltip </h3>
    <SimpleTooltip />
    <h3>Reactjs-popup Menu && subMenu </h3>
    <SimpleMenu />
    <h3>Reactjs-popup nested tooltips</h3>
    <NestedToolTip />
    <h3>Reactjs-popup tooltip position</h3>
    <ToolTipPosition />
    <h3>Reactjs-popup smart tooltip position</h3>
    <TooltipKeepInside />
  </div>
);

render(<App />, document.getElementById("root"));
