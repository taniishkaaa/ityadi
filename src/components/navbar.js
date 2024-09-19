import * as React from "react"
import {
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap'

const Navbar = () => (
    <Nav>
        <NavItem>
            <NavLink
                active
                href="/"
            >
                Home
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="/blog">
                Blog
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="/archive">
                Archive
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="/rss.xml" target="_blank" rel="noopener noreferrer">
                RSS
            </NavLink>
        </NavItem>
    </Nav>
)

export default Navbar