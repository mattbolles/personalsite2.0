/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
  query SiteQuery {
    site {
      siteMetadata {
        title
        menuLinks {
          name
          link
        }
      }
    }
  }
  `)

  return (
    <>
      <Header menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata?.title} />
      <div
        style={{
          margin: `auto`,
          padding: `0`,
          backgroundColor: '#000000',
          color: `#FFFFFF`
          
        }}
      >
        <div className = "fade-in-2" style = {{
          padding: `8rem 1.0875rem 1.45rem`
        }}>
           
        <main>{children}</main>
        </div>
       
        <div className = 'footer-box'
        style = {{
          padding: `.0875rem 1.0875rem 1.45rem 0rem`
        }}>
        <footer
          style={{
            marginTop: `1.25rem`,
            textAlign: 'center'
          }}>
          <div className="footer-link">
          <a href="mailto:matt@mattrbolles.com">Email Me</a>
          </div>
        </footer>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
