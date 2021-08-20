import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import AboutMe from "../components/AboutMe"
import Education from "../components/Education"
import Intro from "../components/Intro"
import NavBar from "../components/NavBar"
import Skills from "../components/Skills"
import Projects from "../components/Projects"

const IndexPage = () => (
  <Layout>
    <Seo title="Matt Bolles" />
    <NavBar />
    <Intro />
    <AboutMe />
    <Education />
    <Skills />
    <Projects />
  </Layout>
)

export default IndexPage
