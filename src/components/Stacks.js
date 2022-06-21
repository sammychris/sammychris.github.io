import * as React from "react";
import colors from "../util/colors";

const Stacks = ({ stack, index }) => {
  const color = colors(stack);
  // index undefined
  if (index === undefined) {
    return <span style={{ background: color.bg }}>{color.name}</span>;
  }
  return (
    <span style={{ background: color.bg, top: index * 25, zIndex: 1 }}>
      {color.name}
    </span>
  );
};

export default Stacks;
