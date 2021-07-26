import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import SectionHeading from "../components/SectionHeading";
import { MdPerson }from '@react-icons/all-files/md/MdPerson'
const AboutMe = () => {
  return (
    <section id="about-me">
        <SectionHeading title = "About Me" icon = {MdPerson}/>
        <div className = "gradient-text">
          <div className = "intro-text">
            <h3 style = {{textAlign: 'center'}}>Hi, My name is Matt. Good to meet you!</h3>
          </div>
        </div>
        <div className = "section-text">
            <p>I just finished my degree, and am eager to get out into the world!</p>
            <p>I've always had a fascination with computers since I was a child. I was enamored by the endless possibilities for creation and connection they allowed. I've experimented with just about everything! From videos, to music, to badly designed GeoCities websites, I've tried it all. Now I'm seeking to build software that connects and brings others together, while encouraging that spirit of curiosity and creation that first hooked me.</p>
            <p>I am familiar with Python, Java, HTML/CSS, JavaScript, React, and NodeJS, and am always seeking to expand my knowledge and learn new things. Feel free to contact me about any software development opportunities.</p>
            <p>In my free time I enjoy making music, exploring the world, meeting new people, and enjoying every experience I can.</p>
        </div>
        <div className = "gradient-line">
        </div>
    </section>
  );
};

export default AboutMe;