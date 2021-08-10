import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"
import React from "react";
import SectionHeading from "../components/SectionHeading";
import { MdDevices }from '@react-icons/all-files/md/MdDevices'
const ProjectCard = ({Project}) => {
    const imageURL = Project.image;




  return (
    <div>
        <div>{Project.name}</div>
        <div>{Project.description}</div>
        <div>{Project.link}</div>
        <div>{Project.technologies}</div>
        <div><GatsbyImage image="../images/site-logo.png" alt={Project.name} /></div>
        <div>{imageURL}</div>
    </div>
  );
};

export default ProjectCard;