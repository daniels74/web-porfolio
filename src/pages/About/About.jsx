import React from "react";
import "./About.css";
import myface from "../../images/pic.jpg";
import { ModalHover } from "react-modal-hover";

const About = () => {
  return (
    <div className="about-content">
      <div className="box_container">
        <div className="seg">
          <img className="about-img" src={myface} alt="" />
          <p>
            I find myself with the motivations and skills to become a web
            developer. On a busy day, you can always find me working at a
            consistant rate. I dont ever want to waste time, and even when I do,
            I make sure it is of good use somewhere or somehow. One of my
            biggest motivations right now is to contibute into making something
            usefull and valuable in terms of web development.
          </p>
        </div>
      </div>

      <div>
        <ModalHover onHover={<h3>Hello World</h3>}>
          <div>Hover Me!</div>
        </ModalHover>
    
      </div>

      <div className="expo-container">
        <div className="experience">
          <h3>Experienced Languages</h3>
          <ul className="expo-list">
            <li>React</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>Node</li>
            <li>CSS</li>
            <li>C++</li>
            <li>Python</li>
            <li>Assembly</li>
          </ul>
        </div>
        <div className="experience">
          <h3>Experienced Extensions</h3>
          <div className="expo-list">
            <div> Hello </div>
            <h4>ChartJS</h4>
            <h4>Styled Components</h4>
            <h4>Axios</h4>
            <h4>Redux</h4>
            <h4>Github</h4>
            <h4>Auth0</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
