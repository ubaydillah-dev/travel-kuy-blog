import React from "react"
import Layout from "../components/layout"
import Nav from "../components/nav"

const thanks = () => {
  return (
    <Layout>
      <Nav />
      <div className="contact__header"></div>
      <div className="contact__thanks">
        <h1>Thanks, I'll be contact you soon..</h1>
      </div>
    </Layout>
  )
}

export default thanks
