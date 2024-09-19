import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import {
  Card,
  CardTitle,
  CardBody,
  CardSubtitle,
} from 'reactstrap'

const Blog = () => (
  <Layout>
    <Card>
      <CardBody>
        <CardTitle><a href="#">Blog Title</a></CardTitle>
        <CardSubtitle>Date: Sept 19, 2024</CardSubtitle>
        <CardSubtitle>Tags: tag1 tag2 tag3</CardSubtitle>
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        <CardTitle><a href="#">Blog Title</a></CardTitle>
        <CardSubtitle>Date: Sept 19, 2024</CardSubtitle>
        <CardSubtitle>Tags: tag1 tag2 tag3</CardSubtitle>
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        <CardTitle><a href="#">Blog Title</a></CardTitle>
        <CardSubtitle>Date: Sept 19, 2024</CardSubtitle>
        <CardSubtitle>Tags: tag1 tag2 tag3</CardSubtitle>
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        <CardTitle><a href="#">Blog Title</a></CardTitle>
        <CardSubtitle>Date: Sept 19, 2024</CardSubtitle>
        <CardSubtitle>Tags: tag1 tag2 tag3</CardSubtitle>
      </CardBody>
    </Card>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Blog" />

export default Blog
