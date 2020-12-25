import React from "react"
import Layout from "../components/layout"
import Nav from "../components/nav"
import SEO from "../components/seo"

import "./contact.css"

const Contact = () => {
  return (
    <Layout>
      <SEO
        title="Contact"
        description="Contact Travel kuy: Travel photographer and Blogger"
      />
      <Nav />
      <div className="contact__header"></div>
      <div className="contact__section">
        <div className="contact__form">
          <h1>Contact</h1>
          <div className="inner">
            <form
              method="post"
              name="contact"
              action="/thanks"
              data-netlify="true"
              netlify-honeypot="bot"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="field__hidden">
                <label htmlFor="bot">Jangan isi ini jika anda manusia</label>
                <input name="bot" id="bot" />
              </div>

              <div className="field">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" />
              </div>

              <div className="field">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" />
              </div>

              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" rows="6"></textarea>
              </div>

              <div className="submit">
                <button type="submit" className="btn__med">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
