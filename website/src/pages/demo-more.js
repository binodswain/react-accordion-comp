import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Gitfork from "../components/githubFork"
import Footer from "../components/footer"
import Accordion from "react-accordion-comp"
import Prism from "prismjs"
import { Fragment } from "react"

const IndexPage = () => {
  const [flag, setFlag] = useState(false)
  const [flag1, setFlag1] = useState(false)
  const [flag2, setFlag2] = useState(false)

  const [showCode, setCodeFlag] = useState(false)
  const [showCode1, setCodeFlag1] = useState(false)
  const [showCode2, setCodeFlag2] = useState(false)

  useEffect(() => {
    // call the highlightAll() function to style our code blocks
    Prism.highlightAll()
  }, [])

  return (
    <Fragment>
      <Layout>
        <SEO title="More demos" />
        <Gitfork />
        <h1>More Demos</h1>
        <section className="demo">
          <h2>With default config:</h2>
          <button onClick={() => setFlag2(!flag2)}>
            toggle content (default)
          </button>
          <button className="code" onClick={() => setCodeFlag2(!showCode2)}>
            {!showCode2 ? "show" : "hide"} code
          </button>
          <Accordion isOpen={flag2}>
            <div className="red">
              <p>{content(3)}</p>
            </div>
          </Accordion>
          <p className="with-padding">{content(3)}</p>

          <Accordion isOpen={showCode2}>
            <pre className="line-numbers">
              <code className="language-jsx">{htmlcode2}</code>
            </pre>
          </Accordion>

          <h2>With default config:</h2>
          <button onClick={() => setFlag1(!flag1)}>
            toggle content (5s linear)
          </button>
          <button className="code" onClick={() => setCodeFlag1(!showCode1)}>
            {!showCode1 ? "show" : "hide"} code
          </button>
          <Accordion isOpen={flag1} duration={"5s"} timingFunc={"linear"}>
            <div className="red">
              <p>{content(3)}</p>
            </div>
          </Accordion>
          <p className="with-padding">{content(3)}</p>

          <Accordion isOpen={showCode1}>
            <pre className="line-numbers">
              <code className="language-jsx">{htmlcode1}</code>
            </pre>
          </Accordion>
        </section>
      </Layout>
      <Footer />
    </Fragment>
  )
}

export default IndexPage

const content = (line = 1) => {
  const str = `Nam iaculis ultricies tristique. Phasellus eleifend elit mi, euhendrerit.`
  let arr = []
  for (let index = 0; index < line; index++) {
    arr.push(str)
  }
  return arr
}

const htmlcode2 = `import React, { useState } from 'react';

function App() {
    const [flag, setFlag] = useState(false);

    return <div>
        <button onClick={() => setFlag(!flag)}>
            toggle content ( 1s - ease )
        </button>
        <Accordion isOpen={flag}>
            <div className="red">
                <p>
                    {content()}
                </p>
            </div>
        </Accordion>
    </div>
}
`

const htmlcode1 = `import React, { useState } from 'react';

function App() {
    const [flag, setFlag] = useState(false);

    return <div>
        <button onClick={() => setFlag(!flag)}>
            toggle content ( 5s - linear )
        </button>
        <Accordion isOpen={flag} duration={'5s'} timingFunc={'linear'}>
            <div className="red">
                <p>
                    {content(24)}
                </p>
            </div>
        </Accordion>
        <div className="black with-padding">
            <h2>title</h2>
            <p>
                {content(12)}
            </p>
        </div>
    </div>
}
`
