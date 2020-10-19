import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Gitfork from "../components/githubFork"
import Accordion from "react-accordion-comp"
import Prism from "prismjs"
import Header from "../components/header"
import Footer from "../components/footer"
import "react-accordion-comp/dist/styles.css"
import { Fragment } from "react"

const htmlcode = `import React, { useState } from 'react';
import Accordion from "react-accordion-comp";

function App() {
    const [flag, setFlag] = useState(false);

    return (
        <div className="container">
            <button onClick={()=>setFlag(!flag)}>
                toggle content
            </button>
            <Accordion isOpen={flag}>
                <div className="red">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In sed tempor sem. Aenean vel turpis feugiat,
                        ultricies metus at, consequat velit. Curabitur est nibh,
                        varius in tellus nec, mattis pulvinar metus.
                        In maximus cursus lorem, nec laoreet velit eleifend vel.
                        Ut aliquet mauris tortor, sed egestas libero interdum vitae.
                        Fusce sed commodo purus, at tempus turpis.
                    </p>
                </div>
            </Accordion>
        </div>
}
`

const styles = {
  // bgColor: 'white',
  titleTextColor: "blue",
  rowTitleColor: "blue",
  // rowContentColor: 'grey'
}

const IndexPage = () => {
  const [flag1, setFlag1] = useState(false)
  const [showCode1, setCodeFlag1] = useState(false)

  useEffect(() => {
    // call the highlightAll() function to style our code blocks
    Prism.highlightAll()
  }, [])

  return (
    <Fragment>
      <SEO title="react-accordion-comp" />
      <Header />
      <Layout>
        <Gitfork />
        <section className="badges">
          <a href="https://www.npmjs.com/package/react-accordion-comp">
            <img
              src="https://badgen.net/npm/v/react-accordion-comp"
              alt="release"
            />
          </a>
          <a href="https://github.com/binodswain/react-accordion-comp/issues">
            <img
              src="https://badgen.net/github/open-issues/binodswain/react-accordion-comp"
              alt="open-issues"
            />
          </a>
          <a href="https://github.com/binodswain/react-accordion-comp/blob/master/LICENSE">
            <img
              src="https://badgen.net/github/license/binodswain/react-accordion-comp"
              alt="license"
            />
          </a>
          <a href="https://github.com/binodswain/react-accordion-comp/actions?query=workflow%3ATest">
            <img
              src="https://github.com/binodswain/react-accordion-comp/workflows/Test/badge.svg"
              alt="test status"
            />
          </a>
          <a href="https://github.com/binodswain/react-accordion-comp/actions?query=workflow%3ABuild">
            <img
              src="https://github.com/binodswain/react-accordion-comp/workflows/Build/badge.svg"
              alt="build status"
            />
          </a>
        </section>

        <section className="demo">
          <h2>Demo</h2>
          <div
            style={{
              marginBottom: `1em`,
            }}
          >
            <button
              onClick={() => setFlag1(!flag1)}
              style={{
                backgroundColor: "#5000ca",
                color: "white",
                border: "none",
                padding: `0.45em 0.75em`,
                borderRadius: 5,
              }}
            >
              toggle content ( 1s - ease )
            </button>
          </div>

          <Accordion isOpen={flag1} duration={`1000ms`}>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </Accordion>
          <div>
            <Link to={"/demo-more"}>View more demo</Link>
          </div>
        </section>

        <section className="usage">
          <h3>Usage</h3>
          <div>Install the package.</div>
          <pre>
            <code className="language-markup">
              npm install --save react-accordion-comp
            </code>
          </pre>
          <div>Import the package.</div>
          <pre>
            <code className="language-jsx">
              import Faq from 'react-accordion-comp';
            </code>
          </pre>
          Import styles to application. Import in a SCSS file.
          <pre>
            <code className="language-jsx">
              @import "~react-accordion-comp/dist/styles.css";
            </code>
          </pre>
          Or in JSX file.
          <pre>
            <code className="language-jsx">
              import "react-accordion-comp/dist/styles.css";
            </code>
          </pre>
          <br />
          <strong>Code example: </strong>
          <br />
          <pre className="line-numbers">
            <code className="language-jsx">{htmlcode}</code>
          </pre>
        </section>
      </Layout>
      <Footer />
    </Fragment>
  )
}

export default IndexPage
