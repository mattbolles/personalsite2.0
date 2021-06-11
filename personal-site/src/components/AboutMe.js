import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import SectionHeading from "../components/SectionHeading";

const AboutMe = () => {
  

  return (
    <section id="about-me">
        <SectionHeading title = "About Me" />
        <p>I just finished my Computer Science degree at San Francisco State University, and am eager to get out into the world!</p>
    <p>I am familiar with Python, Java, HTML/CSS, JavaScript, React, and NodeJS. Feel free to contact me about any software development opportunities.</p>
    <p>In my free time I enjoy making music, exploring the world, meeting new people, and enjoying every experience I can.</p>
    </section>
  );
};

export default AboutMe;