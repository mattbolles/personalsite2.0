import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Title from "../components/Title"
import NavBar from "../components/NavBar"
import AboutMe from "../components/AboutMe"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <NavBar />
    <Title />
    <AboutMe />
  
  </Layout>
)

export default IndexPage
