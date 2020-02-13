import React from "react";

const Char = props => {
  const style = {
    display: "inline-block",
    padding: "16px",
    textAlign: "center",
    margin: "16px",
    border: "1px solid black"
  };

  const listOfChars = props.text.split("").map((x, index) => (
    <div onClick={() => props.remove(index)} style={style}>
      {x}
    </div>
  ));

  return <div>{listOfChars}</div>;
};

export default Char;
