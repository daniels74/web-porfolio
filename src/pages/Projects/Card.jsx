import React from "react";
import "./Card.css";
// import vid1 from "../../vids/vid1.mp4";

const Card = (props) => {
  const [touch, setTouch] = React.useState(false);

  return (
    <div
      className={touch ? "card-touch" : "card"}
      onTouchStart={() => setTouch(!touch)}
    >
      <div className="card_body">
        {props.img ?
          <img className="card_img" src={`../images/${props.img}`} alt="" />
          :
          // <video src={`../vids/${props.vid}`} alt=""></video>
          <video width="100%" height="auto" controls autoPlay="true" loop="true">
            <source src={`./vids/${props.vid}`} type="video/mp4"/>
            {/* <source src={`../../vids/${props.vid}`} type="video/mp4"/> */}
          </video>
        }

        <h2 className="card_title">{props.title}</h2>
        <p className="card_description">{props.description}</p>
      </div>
      <div className="card-btns">
        <a href={props.link}>
          <button className="card_btn">Source Code</button>
        </a>
        <a href={props.demo}>
          <button className="card_btn">View Demo</button>
        </a>
      </div>
    </div>
  );
};

export default Card;
