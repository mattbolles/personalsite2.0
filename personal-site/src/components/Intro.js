import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import React, { useState } from "react";

/* TODO: Make this work better on mobile OR redirect to rest if on mobile */

const Intro = () => {
  return ( 
    <section id="intro">
        <div className="header-box">
            <div className = "site-intro">
                <div className = "site-intro-text">
                    <div className = "gradient-text">
                        <h1>Hi, my name is Matt.</h1>
                    </div>
                    <div className="site-intro-animation">
                        <div className="site-intro-animation-container">
                            <p className="site-intro-animation-container-text">
                            I'm
                            </p>
                            
                            <ul className="site-intro-animation-container-list">
                            <li className="site-intro-animation-container-list-item">a new grad.</li>
                            <li className="site-intro-animation-container-list-item">a programmer.</li>
                            <li className="site-intro-animation-container-list-item">an explorer.</li>
                            <li className="site-intro-animation-container-list-item">seeking new opportunities.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Intro;