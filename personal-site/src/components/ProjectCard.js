import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import SectionHeading from "../components/SectionHeading";
import { MdDevices }from '@react-icons/all-files/md/MdDevices'
const ProjectCard = ({Project}) => {






  return (
    <div>
        <div>{Project.name}</div>
        <div>{Project.description}</div>
    </div>
  );
};

export default ProjectCard;