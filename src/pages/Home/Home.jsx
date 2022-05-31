import React from 'react'
import "./Home.css"
import Footer from "../../components/Footer/Footer"

const Home = () => {
  return (
    <div className="main">
        <div className="home">
            <h2>Hello and Welcome Employer</h2>
            <h1>This is my Porfolio</h1>
            <p>You can view my projects by 
              clicking the projects button, or you can learn about me in
              general by clicking about.
            </p>
        <div className="home_buttons">
          <a href="/Projects">
            <button className="home_btn-Projects">Projects</button>
          </a>
          <a href="/About">
            <button className="home_btn-About">About</button>
          </a>
        </div>
        </div>
        <Footer />
    </div>
  )
}

export default Home