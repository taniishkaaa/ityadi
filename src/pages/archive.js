import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Archive = () => (
  <Layout>
    <div className="archive">
      <ul>
        <li><p><time>{new Date().toISOString().split('T')[0]}</time>
          {" - "}
          <a href="#">Blog title</a></p>
        </li>
        <li><p><time>{new Date().toISOString().split('T')[0]}</time>
          {" - "}
          <a href="#">Blog title</a></p>
        </li>
        <li><p><time>{new Date().toISOString().split('T')[0]}</time>
          {" - "}
          <a href="#">Blog title</a></p>
        </li>
        <li><p><time>{new Date().toISOString().split('T')[0]}</time>
          {" - "}
          <a href="#">Blog title</a></p>
        </li>
        <li><p><time>{new Date().toISOString().split('T')[0]}</time>
          {" - "}
          <a href="#">Blog title</a></p>
        </li>
        <li><p><time>{new Date().toISOString().split('T')[0]}</time>
          {" - "}
          <a href="#">Blog title</a></p>
        </li>
        <li><p><time>{new Date().toISOString().split('T')[0]}</time>
          {" - "}
          <a href="#">Blog title</a></p>
        </li>
        <li><p><time>{new Date().toISOString().split('T')[0]}</time>
          {" - "}
          <a href="#">Blog title</a></p>
        </li>
        <li><p><time>{new Date().toISOString().split('T')[0]}</time>
          {" - "}
          <a href="#">Blog title</a></p>
        </li>
        <li><p><time>{new Date().toISOString().split('T')[0]}</time>
          {" - "}
          <a href="#">Blog title</a></p>
        </li>
        <li><p><time>{new Date().toISOString().split('T')[0]}</time>
          {" - "}
          <a href="#">Blog title</a></p>
        </li>
        <li><p><time>{new Date().toISOString().split('T')[0]}</time>
          {" - "}
          <a href="#">Blog title</a></p>
        </li>
      </ul>
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Archive" />

export default Archive
