import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import {
  Card,
  CardTitle,
  CardBody,
  CardText,
  CardSubtitle,
} from 'reactstrap'

const Home = () => (
  <Layout>
    <Card>
      <CardBody>
        <CardTitle>Ityadi</CardTitle>
        <CardSubtitle><span style={{fontSize: '1.5rem'}}>/ɪt̪.jaː.d̪i/</span></CardSubtitle>
        <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus purus turpis, vehicula viverra ultricies sit amet, maximus quis odio. Nullam ut ante velit. Pellentesque pharetra semper eros, vel rutrum enim venenatis a. Mauris dignissim tellus at vulputate ullamcorper. Sed nulla nulla, commodo nec dignissim ac, rutrum vestibulum erat. Phasellus et molestie arcu. In pretium dapibus dui id porttitor. Vivamus quis scelerisque augue. Proin bibendum cursus tortor, eu scelerisque nibh dictum vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
<br/>
          Nam suscipit aliquam sollicitudin. Duis pellentesque, diam sed vestibulum eleifend, ipsum risus ornare felis, nec interdum elit ligula vitae magna. Pellentesque vulputate interdum porttitor. Quisque ut massa eget eros auctor commodo non non leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus sed luctus ex. Nunc cursus urna et nisi ornare finibus ac sit amet nisi. Vestibulum quis posuere nulla. Nulla volutpat purus ut lorem tincidunt volutpat.
          <br/>
          Aenean faucibus nisi eros, cursus tincidunt odio rutrum sit amet. Aliquam blandit ornare ipsum eget eleifend. Pellentesque pulvinar, turpis in iaculis pharetra, purus erat sollicitudin sapien, non pulvinar neque nisi nec nisl. Cras elementum a ligula tincidunt suscipit.
          <br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non odio neque. Duis vitae augue orci. Suspendisse dignissim ultricies libero id scelerisque. Sed at eros tellus. Aenean a suscipit enim. Vestibulum cursus libero vel massa condimentum luctus. Ut vitae orci eu mi commodo porttitor et vel nisi. Quisque condimentum tincidunt neque, ut pellentesque quam malesuada vel. Donec rhoncus in est ut dapibus.
          <br/>
          Donec rutrum egestas tincidunt. Praesent a iaculis arcu. Pellentesque eu eros sed tellus dapibus venenatis sit amet in nisl. Proin vel pharetra nulla. Proin tincidunt metus nec neque feugiat vulputate. Nulla eget ultrices elit. Maecenas malesuada orci ut lorem eleifend, sed ornare ipsum eleifend. Vivamus id nisl sed arcu pharetra malesuada ac at tellus. Pellentesque egestas ornare sapien, non malesuada ligula vehicula ac.</CardText>
      </CardBody>
    </Card>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default Home
