import React from "react";

type LabelProps = {
  spice: string;
};
function Label({spice}: LabelProps) {
  return <div>{spice}</div>;
}

export default Label;
