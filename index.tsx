import React from "react";
import ReactDom from "react-dom";

import SpiceSheets from "./SpiceSheets";
import SPICES from "./spices";

function App() {
  return <SpiceSheets spices={SPICES} />;
}

ReactDom.render(<App />, document.getElementById("app"));
