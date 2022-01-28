import React from 'react';
import './about.css'
import aboutIMG from "../about/aboutIMG.gif"
import Social from '../../comman/Social';

function About() {
    return <div className='about'>

        <div className='about_top'>

            <div className='about_text'>
            Hello There 👋,
            <br />
             I am a <span className='main_skill'>MERN stack developer.</span>
             <br />
             Love to explore new things.
            </div>

            <div className='about_img'>
            <img src={aboutIMG} className='about_image' />
            </div>
        </div>

        <div className='about_bottom'>
            <Social />
        </div>
    </div>;
}

export default About;
