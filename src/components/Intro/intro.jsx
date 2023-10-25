import React from "react";
import './intro.css';
import image from '../../assets/image.html';
import btnImg from '../../assets/hireme.png'
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="IntroContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="IntroName">Scott</span> <br />founder of Scott's Tots</span>
                <p className="IntroPara">We’re all homos. <br />Homo… Sapiens</p>
                <Link><button className="btn"><img src={btnImg} alt="Hire" className='btnImg'/>Hire Me</button></Link>
            </div>
            <img src={image} alt="Profile" className="image"></img>
        </section>
    )
}

export default Intro;