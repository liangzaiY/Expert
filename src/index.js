import React from "react";
import ReactDOM from "react-dom";
import mlatin from "@public/asset/imgs/cs.jpg";
import styles from "./index.less";
const App = () => {
  return (
    <div>
      App入口
      <img src={mlatin}></img>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
