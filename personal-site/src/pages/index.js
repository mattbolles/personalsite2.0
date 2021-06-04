import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    
    <br></br>
      <div className = "gradient-text">
        <h1>Hi, My name is Matt. Good to meet you!</h1>
      </div>
    
    <p>I just finished my Computer Science degree at San Francisco State University, and am eager to get out into the world!</p>
    <p>I am familiar with Python, Java, HTML/CSS, JavaScript, React, and NodeJS. Feel free to contact me about any software development opportunities.</p>
    <p>In my free time I enjoy making music, exploring the world, meeting new people, and enjoying every experience I can.</p>
    <br></br>
    <div className = "gradient-line">
        <br></br>

        <div className = "gradient-text">
        <a id="contact">
        <h1>Contact Me</h1>
        </a>
      </div>
      <div className = "contact-links" style = {{
        display: 'flex'
      }}>
          <h2><a href = "mailto:matt@mattrbolles.com" style = {{padding: '1rem', 
          marginLeft: '-1rem'}}>Email</a></h2>
          <h2><a href ="http://linkedin.com/in/matt-bolles-504971107/" style = {{padding: '1rem'}}>LinkedIn</a></h2>
          <h2><a href = "http://github.com/mattbolles" style = {{padding: '1rem'}}>GitHub</a></h2>
      </div>
    </div>
  </Layout>
)

export default IndexPage
