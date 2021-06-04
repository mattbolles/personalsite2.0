import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle, menuLinks }) => (
  <div className = "header-box"
  style = {{
    position: 'fixed',
    width: '100%',
    top: 0,
  }}>
  <header
    style={{
      background: `#000000`,
      marginBottom: `.2rem`,
      margin: 'auto',
      display: "grid",
      width: '100%',
      gridTemplateColumns: '75% 25%'
    }}>
    
    <div className = "h1-header" style={{
        margin: `0`,
        padding: `1.25rem`,
        gridColumnStart: 1,
        gridColumnEnd: 2,
      }}>
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
      display: 'inline-block',
      gridColumnStart: 2,
      gridColumnEnd: 'end'
    }}>
          <nav style = {{
      display: "grid",
      gridTemplateColumns: 'auto',
    }}>
            <ul style={{
              display: 'inline-block'
            }}>
              {menuLinks.map(link => (
                <li
                  key={link.name}
                  style={{
                    display: 'inline-block',
                    marginTop: '10%',
                    listStyleType: `none`,
                    padding: `1rem`,
                    justifySelf: 'center'
                  }}
                >
                <div className = "nav-bar-link">
                  <Link to={link.link}>
                    {link.name}
                  </Link>
                  </div>
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
