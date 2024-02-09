import React from "react";

const MainButtom = ({ greeting, className }) => {
  return (
    <>
      <button className={className}>{greeting} </button>
    </>
  );
};

export default MainButtom;
