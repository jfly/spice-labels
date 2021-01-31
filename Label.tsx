import React from "react";

import { range } from "./util";
import { Spice } from "./spices";

const START_YEAR = 2020;
const YEAR_COUNT = 10;
const DIGIT_ROTATION_DEGRESS = 8;

const DIGITS_PER_YEAR = 4;

type LabelProps = {
  spice: Spice | null;
};
function Label({ spice }: LabelProps) {
  if (!spice) {
    return <div />;
  }
  const yearRotationDegress = 360 / YEAR_COUNT;
  const initialRotationOffsetDegrees =
    (yearRotationDegress - (DIGITS_PER_YEAR - 1) * DIGIT_ROTATION_DEGRESS) / 2;

  const splitName = spice.name.split(" ").map((piece, i) => (
    <span className="spice-name-part" key={i}>
      {piece}
      <br />
    </span>
  ));
  return (
    <div className="label">
      <div className="label-oversize"></div>
      <span
        className="spice-name-wrapper"
        style={{ fontSize: `${spice.scale}em` }}
      >
        <span className="spice-name">{splitName}</span>
        <span className="spice-subname">{spice.subname}</span>
      </span>
      <div className="years-path">
        {range(START_YEAR, START_YEAR + YEAR_COUNT).map((year, i) => (
          <Year
            key={year}
            year={year}
            rotationDegrees={
              initialRotationOffsetDegrees + i * yearRotationDegress
            }
          />
        ))}
      </div>
    </div>
  );
}

type YearProps = {
  year: number;
  rotationDegrees: number;
};
function Year({ year, rotationDegrees }: YearProps) {
  return (
    <>
      {Array.from(year.toString()).map((digitStr: string, i: number) => {
        const digit = parseInt(digitStr, 10);
        return (
          <YearDigit
            key={i}
            digit={digit}
            rotationDegrees={rotationDegrees + i * DIGIT_ROTATION_DEGRESS}
          />
        );
      })}
    </>
  );
}

type YearDigitProps = {
  digit: number;
  rotationDegrees: number;
};
function YearDigit({ digit, rotationDegrees }: YearDigitProps) {
  const style = {
    transform: `rotate(${rotationDegrees}deg)`,
  };
  return (
    <span className="digit" style={style}>
      <span className="digit-bg">{digit}</span>
    </span>
  );
}

export default Label;
