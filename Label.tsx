import React from "react";

type LabelProps = {
  spice: string;
};
function Label({spice}: LabelProps) {
  return <div className="label">{spice}</div>;
}

export default Label;
