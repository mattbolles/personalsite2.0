import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import React, { useState } from "react";
import { SocialIcon } from 'react-social-icons';

const Title = () => {
  const data = useStaticQuery(graphql`
  query {
    file(relativePath: { eq: "site-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 900, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`);

// change color of social media buttons when user hovers over
const [gitHubBGColor, setGitHubBGColor] = useState("#ffffff")
const [gitHubFGColor, setGitHubFGColor] = useState("#000000")
const setGitHubColor = (bgColor, fgColor) => {
    setGitHubBGColor(bgColor);
    setGitHubFGColor(fgColor);
}
const [linkedInBGColor, setLinkedInBGColor] = useState("#ffffff")
const [linkedInFGColor, setLinkedInFGColor] = useState("#000000")
const setLinkedInColor = (bgColor, fgColor) => {
    setLinkedInBGColor(bgColor);
    setLinkedInFGColor(fgColor);
}
const [emailBGColor, setEmailBGColor] = useState("#ffffff")
const [emailFGColor, setEmailFGColor] = useState("#000000")
const setEmailColor = (bgColor, fgColor) => {
    setEmailBGColor(bgColor);
    setEmailFGColor(fgColor);
}

  return (
    <section id="site-title">
        <div className="site-title">
            <div className="site-logo">
                <Img fluid={data.file.childImageSharp.fluid} alt="Matt Bolles"/>
            </div>
            <div className = "contact-link-buttons">
                <div className = "contact-link-button-individual" 
                onMouseEnter={() => setGitHubColor("#73ceff", "#b948e8")}
                onMouseOut={() => {setGitHubColor("#ffffff", "#000000")}}>
                    <SocialIcon url="http://github.com/mattbolles" bgColor = {gitHubBGColor} fgColor = {gitHubFGColor}/>
                </div>
                <div className = "contact-link-button-individual" 
                onMouseEnter={() => setLinkedInColor("#73ceff", "#b948e8")}
                onMouseOut={() => {setLinkedInColor("#ffffff", "#000000")}}>
                    <SocialIcon url="https://linkedin.com/in/mattrbolles/" bgColor = {linkedInBGColor} fgColor = {linkedInFGColor}/>
                </div>
                <div className = "contact-link-button-individual" 
                onMouseEnter={() => setEmailColor("#73ceff", "#b948e8")}
                onMouseOut={() => {setEmailColor("#ffffff", "#000000")}}>
                    <SocialIcon url="mailto:matt@mattrbolles.com" bgColor = {emailBGColor} fgColor = {emailFGColor}/>
                </div>
            
            </div>
            
        </div>
    </section>
  );
};

export default Title;