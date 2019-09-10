import React from "react";

const SpecialButton = (props) => {
  console.log('Special Button Props: ', props);
  return (
    <button className="buttons">{props.specials}</button>
  );
};
export default SpecialButton;
