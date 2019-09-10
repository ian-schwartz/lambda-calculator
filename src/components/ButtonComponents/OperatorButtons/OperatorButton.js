import React from "react";

const OperatorButton = (props) => {
  console.log('Operator Button Props: ', props);
  return (
    <button className="buttons">{props.operators.value}</button>
  );
};
export default OperatorButton;