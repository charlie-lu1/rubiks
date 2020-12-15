import React from "react";

export default function Box({ box }) {
  const color = box.split(/(\d)/)[0];
  return <div className={`this-is-a-box ${color}`}>{box} box</div>;
}
