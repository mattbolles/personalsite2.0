/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import "./layout.css"

const Layout = ({ children }) => {

  return (
    <>
      <div
        style={{ 
          margin: `auto`,
          padding: `0`,
          backgroundColor: '#1c1c1c',
          color: `#e8e8e8`
          
        }}
      >
        <div className = "fade-in-2" style = {{
          
        }}>
           
        <main>{children}</main>
        
       
        <div className = 'footer-box'
        style = {{
          padding: `.0875rem 1.0875rem 1.45rem 0rem`,
          backgroundColor: '#1c1c1c'
        }}>
        <footer
          style={{
            backgroundColor: '#1c1c1c',
            marginTop: `1.25rem`,
            textAlign: 'center',
            color: '#a6a6a6',
            fontSize: '.8em'
          }}>
          <div className="footer-copyright">Copyright 2021 Matt Bolles.
          Made in San Francisco, California.
          </div>
        </footer>
        </div>
      </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
