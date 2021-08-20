import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import React, { useState } from "react";
import { SocialIcon } from 'react-social-icons';

/* TODO: Make clicking logo take user to top of page */

const NavBar = () => {
  const data = useStaticQuery(graphql`
  query {
    file(relativePath: { eq: "site-logo.png" }) {
      childImageSharp {
        fluid(maxHeight: 100, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`);

// change color of social media buttons when user hovers over
const [gitHubBGColor, setGitHubBGColor] = useState("#e8e8e8")
const [gitHubFGColor, setGitHubFGColor] = useState("#1c1c1c")
const setGitHubColor = (bgColor, fgColor) => {
    setGitHubBGColor(bgColor);
    setGitHubFGColor(fgColor);
}
const [linkedInBGColor, setLinkedInBGColor] = useState("#e8e8e8")
const [linkedInFGColor, setLinkedInFGColor] = useState("#1c1c1c")
const setLinkedInColor = (bgColor, fgColor) => {
    setLinkedInBGColor(bgColor);
    setLinkedInFGColor(fgColor);
}
const [emailBGColor, setEmailBGColor] = useState("#e8e8e8")
const [emailFGColor, setEmailFGColor] = useState("#1c1c1c")
const setEmailColor = (bgColor, fgColor) => {
    setEmailBGColor(bgColor);
    setEmailFGColor(fgColor);
}

  return ( 
    <section id="nav-bar">
        <div className="nav-bar">
            <div className = "header-box">
                
                <div className = "contact-link-buttons">
                    <div className = "site-logo">
                    <Img fluid={data.file.childImageSharp.fluid} alt="Official Website of Matt Bolles"/>
                    </div>
                    
                    <div className = "contact-link-button-individual" >
                        <SocialIcon url="http://github.com/mattbolles" bgColor = {gitHubBGColor} fgColor = {gitHubFGColor}  style={{height: 40, width: 40}}
                        onMouseOver={() => setGitHubColor("#73ceff", "#b948e8")} onMouseOut={() => {setGitHubColor("#e8e8e8", "#1c1c1c")}}/>
                    </div>
                    <div className = "contact-link-button-individual">
                        <SocialIcon url="https://linkedin.com/in/mattrbolles/" bgColor = {linkedInBGColor} fgColor = {linkedInFGColor} style={{height: 40, width: 40}}
                        onMouseOver={() => setLinkedInColor("#73ceff", "#b948e8")} onMouseOut={() => {setLinkedInColor("#e8e8e8", "#1c1c1c")}}/>
                    </div>
                    <div className = "contact-link-button-individual" >
                        <SocialIcon url="mailto:matt@mattrbolles.com" bgColor = {emailBGColor} fgColor = {emailFGColor} style={{height: 40, width: 40}}
                        onMouseOver={() => setEmailColor("#73ceff", "#b948e8")} onMouseOut={() => {setEmailColor("#e8e8e8", "#1c1c1c")}}/>
                    </div>
                </div>
        </div>
        </div>
    </section>
  );
};

export default NavBar;