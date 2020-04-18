import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <div
    style={{
      padding: `0`,
      margin: `0 auto`,
      width: "65vw",
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
    }}
  >
    <div style={{ flex: "1" }}>
      <header style={{ marginTop: "2rem", marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline` }}>MySweetSite</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
          <ListLink to="/test/">Test</ListLink>
          <ListLink to="/newpage/">New Page</ListLink>
          <ListLink to="/another-newpage/">Another New Page</ListLink>
        </ul>
      </header>
      {children}
    </div>
    <footer>
      <h4 style={{ marginBottom: `2.5rem` }}>this is my footer</h4>
    </footer>
  </div>
)
