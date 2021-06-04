import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ContactPage = () => (
  <Layout>
    <Seo title="Contact Matt Bolles" />
    <br></br>
    <div className = "gradient-text">
      <p><h1><a href style={{color: `#f9e8ff`, textDecoration: `none`}} to="mailto:matt@mattrbolles.com">Email</a></h1></p>
      <p><h1><Link style={{textDecoration: `none`}} to="http://linkedin.com/in/matt-bolles-504971107/">LinkedIn</Link></h1></p>
      <p><h1><Link style={{textDecoration: `none`}} to="http://github.com/mattbolles">GitHub</Link></h1></p>

    </div>
    
  </Layout>
)

export default ContactPage