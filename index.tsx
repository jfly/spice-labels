import React from "react";
import ReactDom from "react-dom";

import Label from "./Label";
import SPICES from "./spices";

function App() {
  return <div className="sheet">
    {SPICES.map((spice, i) => <Label key={i} spice={spice} />)}
  </div>;
}

ReactDom.render(<App />, document.getElementById("app"));
