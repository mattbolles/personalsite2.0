import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle, menuLinks }) => (
  <div className = "header-box">
  <header
    style={{
      background: `#000000`,
      marginBottom: `.2rem`,
      margin: 'auto',
      display: "flex"
    }}
  >
    <div
    className = "h1-header"
      style={{
        margin: `0`,
        padding: `1.25rem`,
      }}
    >
        <Link
          to="/"
          style={{
            color: `#f9e8ff`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
    </div>
    <div
    style = {{
      justifyContent: 'center' 
    }}>
          <nav>
            <ul style={{display: "flex", flex: 1, flexDirection: "row", marginLeft: '400%', marginTop: '15%' }}>
              {menuLinks.map(link => (
                <li
                  key={link.name}
                  style={{
                    listStyleType: `none`,
                    padding: `1rem`,
                  }}
                >
                  <Link style={{ color: `#f9e8ff` }} to={link.link}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
  </header>
  </div>

)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Matt Bolles`,
}

export default Header
