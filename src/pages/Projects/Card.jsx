import React from 'react'
import "./Card.css"

const Card = (props) => {
  return (
    <div className="card">
        <div className="card_body">
            <img className="card_img" src={`../images/${props.img}`} alt="" />
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
  )
}

export default Card