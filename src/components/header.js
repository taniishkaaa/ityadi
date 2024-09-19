import * as React from "react"
import { Link } from "gatsby"
import Navbar from "./Navbar"

const Header = ({ siteTitle }) => (
  <div className="container">
    <header>
    <div className="upper">
      <Link
        to="/"
        className="title"
      >
        {siteTitle}
      </Link>
      <svg height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><title /><path d="M264,480A232,232,0,0,1,32,248C32,154,86,69.72,169.61,33.33a16,16,0,0,1,21.06,21.06C181.07,76.43,176,104.66,176,136c0,110.28,89.72,200,200,200,31.34,0,59.57-5.07,81.61-14.67a16,16,0,0,1,21.06,21.06C442.28,426,358,480,264,480Z" /></svg>
    </div>
    <hr />
    <div className="lower">
      <Navbar />
    </div>
  </header>
  </div>
)

export default Header
