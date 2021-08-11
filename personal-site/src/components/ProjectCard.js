import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"
import React from "react";
import SectionHeading from "../components/SectionHeading";
import { MdDevices }from '@react-icons/all-files/md/MdDevices'
const ProjectCard = (projectData) => {
  const image= projectData.image;

  return (
    <div className = "project-card">
        <div>{projectData.name}</div>
        <div>{projectData.description}</div>
        <div>{projectData.link}</div>
        <div>{projectData.technologies}</div>
        <div><StaticImage image= {projectData.image} alt={projectData.name} /></div>
        <div><StaticImage image= {"../images/sfsu-logo.png"} alt={projectData.name} /></div>
        <div>{image}</div>
    </div>
  );
};

export default ProjectCard;