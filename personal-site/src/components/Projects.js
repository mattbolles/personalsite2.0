import { graphql, useStaticQuery } from "gatsby";
import React, { useState } from "react";
import SectionHeading from "../components/SectionHeading";
import { MdDevices }from '@react-icons/all-files/md/MdDevices'
import { GatsbyImage } from "gatsby-plugin-image";
import { SocialIcon } from 'react-social-icons';


const Projects = () => {
  const data = useStaticQuery(graphql`
  query ProjectDataQuery {
    allProjectsJson {
      edges {
        node {
          description
          link
          technologies
          name
          image {
                childImageSharp {
                  gatsbyImageData(width: 450, layout: CONSTRAINED, quality: 100)
                }
              }
        }
      }
    }
  }
`);

const [gitHubBGColor, setGitHubBGColor] = useState("#ffffff")
const [gitHubFGColor, setGitHubFGColor] = useState("#1c1c1c")
const setGitHubColor = (bgColor, fgColor) => {
    setGitHubBGColor(bgColor);
    setGitHubFGColor(fgColor);
}
 
  return (
    <section id="projects">
        <SectionHeading title = "Projects" icon = {MdDevices}/>
        <div className = "section-text">
        <div className = "projects">
          {data.allProjectsJson.edges.map(({ node }, index) => (
          <div className = "project-card" key = {index}>
            <div className = "project-card-image"><a href ={node.link} target="_blank"><GatsbyImage image= {node.image.childImageSharp.gatsbyImageData} alt={node.name} /></a></div>
            <div className = "project-card-info">
              <div className = "project-card-title" style = {{marginBottom: '.75rem'}}><h2>{node.name}</h2></div>
              <div>{node.description}</div>
                <div className = "project-card-github-link" 
                    onMouseEnter={() => setGitHubColor("#73ceff", "#b948e8")}
                    onMouseOut={() => {setGitHubColor("#ffffff", "#1c1c1c")}}>
                      <a href ={node.link} target="_blank">View on GitHub</a>
                      <SocialIcon url={node.link} bgColor = {gitHubBGColor} fgColor = {gitHubFGColor} style={{height: 25, width: 25, margin: '.25rem'}}/>
                </div>
              <div>{node.technologies}</div>
            </div>
          </div>
          ))}
        </div>
        </div>
        
        
    </section>
  );
};

export default Projects;