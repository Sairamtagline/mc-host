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
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>Name: mc-host</div>
      <div ref={divRef}></div>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));