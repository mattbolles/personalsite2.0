import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import SectionHeading from "../components/SectionHeading";
import { MdSchool }from '@react-icons/all-files/md/MdSchool'
const Education = () => {
  const data = useStaticQuery(graphql`
  query {
    file(relativePath: { eq: "sfsu-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`);

  return (
    <section id="education">
        <SectionHeading title = "Education" icon = {MdSchool}/>
        <div className = "section-text">
            <div className = "degree-details">
                <div className = "degree-details-icon">
                  <Img fluid={data.file.childImageSharp.fluid} alt="San Francisco State University"/>
                </div>
                <div className = "degree-details-text">
                  <div className = "gradient-text" >
                  <h3 style = {{ marginBottom: '.5rem', marginTop: '.5rem' }}>San Francisco State University</h3>
                  </div>
                  <p style = {{  marginBottom: 0 }}>Bachelor of Science in Computer Science</p>
                  <p>August 2017 - May 2021</p>
                </div>
            </div>
        </div>
        <div className = "gradient-line"></div>
    </section>
  );
};

export default Education;