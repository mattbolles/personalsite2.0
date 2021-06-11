import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import React from "react";

const Title = () => {
  const data = useStaticQuery(graphql`
  query {
    file(relativePath: { eq: "site-logo.png" }) {
      childImageSharp {
        # Specify a fluid image and fragment
        # The default maxWidth is 800 pixels
        fluid(maxWidth: 900, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`);

  return (
    <section id="site-title">
        <div className="site-title">
            <div className="site-logo">
                <Img fluid={data.file.childImageSharp.fluid} alt="Matt Bolles"/>
            </div>
            <div className = "contact-link-buttons">
                
            </div>
            <div className = "gradient-text" >
                <h3>Hi, My name is Matt. Good to meet you!</h3>
            </div>
        </div>
    </section>
  );
};

export default Title;