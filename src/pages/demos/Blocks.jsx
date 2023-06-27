import React from "react";
import "./Blocks.css"

const blocks = (props) => {
  return (
    <div className="democontainer">
      <p>
        {props.description}
      </p>
      {props.img0 ? 
      (<img src={`../images/${props.img0}/${props.img}`} className="description-img" alt="" />)
    :
      (<video src={`./vids/${props.vidPath}/${props.vid}`} className="description-img" alt="" controls autoPlay="true" loop="true" typeof="video/mp4"/>)
    }
    </div>
  );
};

export default blocks;
