import React from "react"
import { Link } from "gatsby"
import Nav from "../components/nav"
import Featured from "../components/featured"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Home from "../components/home"
import Footer from "../components/footer"

import "./index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Nav />
    <Featured />
    <Home />
    <Link to="/blog" className="viewmore">
      viewmore
    </Link>
    <Footer />
  </Layout>
)

export default IndexPage
