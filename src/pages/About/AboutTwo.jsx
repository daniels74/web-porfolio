import React from 'react'
import './AboutTwo.css';
import myface from "../../images/profilePic.jpg";

const AboutTwo = () => {
    return (
        <div className='about-main'>
            <div className="primary-container">
                <img className="about-img" src={myface} alt="" />
                <div className="description-container">
                    <p className='description'>
                        Im a motivated, skilled, and patient indivual powered by an
                        emmense ammount of curiousity in the storage and usage of data. I
                        spend my time learning about web development, but I also have an
                        intrest in the world of cryptocurrency and other forms of
                        investments.
                    </p>
                </div>
            </div>
            <div className="secondary-container">
                <div className="skills-container">
                    <h3>Experienced Languages</h3>
                    <ul className='list-container'>
                        <h4>React</h4>
                        <h4>JavaScript</h4>
                        <h4>HTML</h4>
                        <h4>Node</h4>
                        <h4>CSS</h4>
                        <h4>C++</h4>
                        <h4>Python</h4>
                        <h4>Assembly</h4>
                    </ul>
                </div>
                <div className="skills-container">
                    <h3>Experienced Extensions</h3>
                    <ul className='list-container'>
                        <h4>NPM</h4>
                        <h4>ChartJS</h4>
                        <h4>Styled Components</h4>
                        <h4>Axios</h4>
                        <h4>Redux</h4>
                        <h4>Github</h4>
                        <h4>Auth0</h4>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AboutTwo