import React from "react";
import { createRoot } from "react-dom/client";

import SpiceSheets from "./SpiceSheets";
import SPICES from "./spices";

function App() {
  return <SpiceSheets spices={SPICES} />;
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
