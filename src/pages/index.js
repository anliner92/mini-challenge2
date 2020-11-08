import React from "react"
// import { Link } from "gatsby"
import { users } from "../components/users"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Welcome to our challenge exercise</h1>
      <div className="container">
        <div className="challenge">
          {users.map(user => (
            <ul key={user.id}>
              <li>{user.name}</li>
              <button>Get Posts</button>
            </ul>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
