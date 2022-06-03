import React from 'react'
import "./Footer.css"
import {FaLinkedin} from "react-icons/fa"
import {SiHandshake} from "react-icons/si"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="leftside">
            <h4>Socials</h4>
            <ul className='list'>
                <li>
                    <a href="https://app.joinhandshake.com/stu/users/26034444">
                       <SiHandshake/>
                        Handshake
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/daniel-flores-hurtado-880396149/">
                       <FaLinkedin/>
                        LinkedIn
                    </a>
                </li>
            </ul>
        </div>
        <div className="rightside">
            <h4>Sites in Progress</h4>
            <ul className="list">
                <li>
                    <a href="https://cryptonica.vercel.app/">
                        Cryptonica
                    </a>
                </li>
                <li>
                    <a href="https://project-kam.vercel.app/">
                        PaintZoneOne
                    </a>
                </li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer