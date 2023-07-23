import React from "react";

import { Spice } from "./spices";
import Label from "./Label";
import { chunkify } from "./util";

// TODO: share these with the scss file: https://stackoverflow.com/questions/57559472/is-it-possible-to-share-variable-between-sass-and-javascript-in-vuexnuxt
const COLUMNS_PER_SHEET = 4;
const ROWS_PER_SHEET = 5;

type SpiceSheetsProps = {
  spices: Spice[];
};
function SpiceSheets({ spices }: SpiceSheetsProps) {
  const labelsPerSheet = COLUMNS_PER_SHEET * ROWS_PER_SHEET;
  return (
    <>
      {chunkify(spices, labelsPerSheet).map((spices, i) => (
        <Sheet key={i} spices={spices} />
      ))}
    </>
  );
}

type SheetProps = {
  spices: Spice[];
};
function Sheet({ spices }: SheetProps) {
  return (
    <div className="sheet">
      {spices.map((spice, i) => (
        <Label key={i} spice={spice} includeYears={false} />
      ))}
    </div>
  );
}

export default SpiceSheets;
