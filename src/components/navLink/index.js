import React from "react"
import { Link } from "gatsby"

export const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      return {
        style: {
          color: isCurrent ? "#f06666" : "#fff",
        },
      }
    }}
  ></Link>
)
