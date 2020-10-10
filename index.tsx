import React from "react";
import ReactDom from "react-dom";

import Spices from "./Spices";
import SPICES from "./spices";

function App() {
  return <Spices spices={SPICES} />;
}

ReactDom.render(<App />, document.getElementById("app"));
