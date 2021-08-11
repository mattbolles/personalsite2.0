import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import SectionHeading from "../components/SectionHeading";
import { MdDevices }from '@react-icons/all-files/md/MdDevices'
import { StaticImage } from "gatsby-plugin-image";
import { GatsbyImage } from "gatsby-plugin-image";


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
                  gatsbyImageData(width: 400, layout: CONSTRAINED)
                }
              }
        }
      }
    }
  }
`);
 
  return (
    <section id="projects">
        <SectionHeading title = "Projects" icon = {MdDevices}/>
        <div className = "section-text">
          {data.allProjectsJson.edges.map(({ node }, index) => (
            <div className = "project-card" key = {index}>
            <div>{node.name}</div>
            <div>{node.description}</div>
            <div>{node.link}</div>
            <div>{node.technologies}</div>
            <div><GatsbyImage image= {node.image.childImageSharp.gatsbyImageData} alt={node.name} /></div>
        </div>
          ))}
        </div>
        
        
    </section>
  );
};

export default Projects;