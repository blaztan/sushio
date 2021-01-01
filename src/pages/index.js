import React from "react"
import About from "../components/About"
import Booking from "../components/Booking"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <About />
    <Booking />
  </Layout>
)

export default IndexPage
