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
  </Layout>
)

export default IndexPage
