import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import SectionHeading from "../components/SectionHeading";
import { MdDevices }from '@react-icons/all-files/md/MdDevices'
import ProjectCard from "./ProjectCard";
const Projects = () => {
 
const data = useStaticQuery(graphql`
query ProjectDataQuery {
    site {
      siteMetadata {
        projectData {
          name
          description
          link
          technologies
          image
        }
      }
    }
  }
`);





  return (
    <section id="projects">
        <SectionHeading title = "Projects" icon = {MdDevices}/>
        <div className = "section-text">
            {data.site.siteMetadata.projectData.map((project) =>
            <div className = "project-card" key = {project.name}>
                <ProjectCard Project={project}/>
            </div>
        )}
        </div>
        
        
    </section>
  );
};

export default Projects;