import { graphql, useStaticQuery } from "gatsby";
import React, { useState } from "react";
import SectionHeading from "../components/SectionHeading";
import { BsPersonCheckFill }from '@react-icons/all-files/bs/BsPersonCheckFill'


const Skills = () => {
  const data = useStaticQuery(graphql`
  query SkillDataQuery {
    allSkillsJson {
      edges {
        node {
            skill
            color
        }
      }
    }
  }
`);

// keep track of which one is hovered over - upon hover, magnify project card a bit
const [selectedSkill, setSelectedSkill] = useState(-1);
 
  return (
    <section id="skills">
        <SectionHeading title = "Skills" icon = {BsPersonCheckFill}/>
        <div className = "section-text">
        <div className = "skills">
          {data.allSkillsJson.edges.map(({ node }, index) => (
          <div className = "skill-card" key = {index} onMouseEnter={()=> setSelectedSkill(index)} onMouseLeave={() => setSelectedSkill(-1)}>
            {
            selectedSkill === index ? 
            <div className = "skill-card-selected" style = {{backgroundColor: node.color}}>
                {node.skill}
            </div>
            
            :

            <div className = "skill-card-not-selected">
                {node.skill}
            </div>
            }
              
          </div>
          ))}
        </div>
        </div>
        <div className = "gradient-line"></div>
        
        
    </section>
  );
};

export default Skills;