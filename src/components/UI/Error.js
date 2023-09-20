import React from "react";
import ReactDOM from "react-dom";

import "./Error.css";

const Backdrops = (props) => {
  return <div className="backdrop" onClick={props.onConfirm} />;
};

const ErrorModel = (props) => {
  return (
    <div className="modal">
      <header>
        <h2>{props.title}</h2>
      </header>

      <p>{props.massage}</p>

      <footer>
        <button onClick={props.onConfirm}>Okay</button>
      </footer>
    </div>
  );
};

const Error = (props) => {
  return (
    <div className="outer">
      {ReactDOM.createPortal(
        <Backdrops onConfirm={props.onConfirm} />,
        document.getElementById("root-backdrops")
      )}
      {ReactDOM.createPortal(
        <ErrorModel
          title={props.title}
          massage={props.massage}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("root-models")
      )}
    </div>
  );
};

export default Error;
