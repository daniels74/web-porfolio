import React from "react";
import "./Home.css";

const Home = () => {
  const [btn1, setBtn1] = React.useState(false);

  function togglebtn1() {
    return setBtn1(!btn1);
  }

  const [btn2, setBtn2] = React.useState(false);

  function togglebtn2() {
    return setBtn2(!btn2);
  }
  return (
    <div className="home-container">
      <div className="home">
        <h1>Daniel Flores Hurtado</h1>
        <h2>Web Developer</h2>
        <p>
          You can view my projects by clicking the projects button, or you can
          learn about me in general by clicking about.
        </p>
        <div className="home_buttons">
          <a href="/Projects">
            <button
              className={btn1 ? "home_btns-active" : "home_btns"}
              onTouchStart={togglebtn1}
            >
              Projects
            </button>
          </a>
          <a href="/About">
            <button
              className={btn2 ? "home_btns-active" : "home_btns"}
              onTouchStart={togglebtn2}
            >
              About
            </button>
          </a>
        </div>
      </div>
    
    </div>
  );
};

export default Home;
