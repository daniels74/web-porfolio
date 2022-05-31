import React from "react";
import "./Blocks.css"

const blocks = (props) => {
  return (
    <div className="democontainer">
      <p>
        {props.description}
      </p>
      <img src={`../images/${props.img}`} className="description-img" alt="" />
    </div>
  );
};

export default blocks;
