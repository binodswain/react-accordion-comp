import React, { Fragment } from "react"
import PropTypes from "prop-types"
import Fork from "./githubFork";
import "./layout.css"
import "./index.scss"

const Layout = ({ children }) => {

    return (
        <>
            <Fork />
            <div
                style={{
                    margin: `0 auto`,
                    maxWidth: 960,
                    padding: `0px 1.0875rem 1.45rem`,
                    paddingTop: 0,
                }}
            >
                <h1>react-accordion-comp</h1>
                <main>{children}</main>
                <footer>
                    MIT &copy; <a href="https://github.com/binodswain">binodswain</a>{" "}
                    <br />
                </footer>
            </div>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout