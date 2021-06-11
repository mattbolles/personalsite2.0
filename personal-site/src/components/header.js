import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { logo } from "../images/site-logo.png"
import { Img, GatsbyImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby"


const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "site-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 750) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <header
      style={{
        background: `#000000`,
        margin: 'auto',
        width: '100%',
      }}>
      
      <div className = "site-logo">
          Matt Bolles
          <GatsbyImage
            alt="Matt Bolles"
            className="site-logo-img"
            image={data.logo.childImageSharp.gatsbyImageData}
          />
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Matt Bolles`,
}


export default Header
