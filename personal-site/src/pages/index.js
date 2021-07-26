import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import Title from "../components/Title"
import AboutMe from "../components/AboutMe"
import Education from "../components/Education"
import Intro from "../components/Intro"
import NavBar from "../components/NavBar"

const IndexPage = () => (
  <Layout>
    <Seo title="Matt Bolles" />
    <NavBar />
    <Intro />
    <AboutMe />
    <Education />
  </Layout>
)

export default IndexPage
