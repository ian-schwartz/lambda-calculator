import React from "react";

const SpecialButton = (props) => {
  console.log('Special Button Props: ', props);
  return (
    <button className="special-buttons">{props.specials}</button>
  );
};
export default SpecialButton;
