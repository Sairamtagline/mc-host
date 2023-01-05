import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";

import mcHeaderWrapper from "mc_header/App";

import "./index.scss";

const App = () => {
  const divRef = useRef(null);

  useEffect(() => {
    mcHeaderWrapper(divRef.current);
  }, []);

  return (
    <>
      <div>Name: mc-host</div>
      <div ref={divRef}></div>
    </>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));