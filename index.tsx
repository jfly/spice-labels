import React from "react";
import ReactDom from "react-dom";

import Label from "./Label";

const SPICES = [
  'ginger',
  'tumeric',
  'paprika',
];

function App() {
  return <>
    {SPICES.map(spice => <Label key={spice} spice={spice} />)}
  </>;
}

ReactDom.render(<App />, document.getElementById("app"));
