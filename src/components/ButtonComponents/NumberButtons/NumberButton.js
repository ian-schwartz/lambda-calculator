import React from "react";

const NumberButton = (props) => {
  console.log('Number Button Props: ', props);
  return (
      <button className="buttons">{props.numbers}</button>
  );
};
export default NumberButton;