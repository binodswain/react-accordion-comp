import React, { useState, useEffect } from 'react';
// import './App.scss';
import Accordion from "react-accordion-comp";
import content from "../content";
// import 'react-accordion-comp/dist/styles.css';

import Layout from "../components/layout";
import SEO from "../components/seo";
import Prism from "prismjs";

function App() {
    const [flag, setFlag] = useState(false);
    const [flag1, setFlag1] = useState(false);
    const [flag2, setFlag2] = useState(false);

    const [showCode, setCodeFlag] = useState(false);
    const [showCode1, setCodeFlag1] = useState(false);
    const [showCode2, setCodeFlag2] = useState(false);

    useEffect(() => {
        // call the highlightAll() function to style our code blocks
        setTimeout(() => {
            Prism.highlightAll();
        }, 0);
    }, []);

    return (
        <Layout>
            <div className="page">
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
                <h2>Demo</h2>
                <section className="demo">
                    <button onClick={() => setFlag1(!flag1)}>
                        toggle content ( 1s - ease )
                    </button>

                    <button className="code" onClick={() => setCodeFlag1(!showCode1)}>
                        {!showCode1 ? 'show' : 'hide'} code
                    </button>

                    <Accordion isOpen={flag1} duration={`1000ms`}>
                        <div className="red">
                            <p>
                                {content()}
                            </p>
                        </div>
                    </Accordion>

                    <Accordion isOpen={showCode1}>
                        <pre className="line-numbers">
                            <code className="language-jsx">{htmlcode1}</code>
                        </pre>
                    </Accordion>

                    <hr />
                    <button onClick={() => setFlag2(!flag2)}>
                        toggle content (default)
                    </button>
                    <button className="code" onClick={() => setCodeFlag2(!showCode2)}>
                        {!showCode2 ? 'show' : 'hide'} code
                    </button>
                    <Accordion isOpen={flag2}>
                        <div className="red">
                            <p>
                                {content(3)}
                            </p>
                        </div>
                    </Accordion>
                    <p className="with-padding">
                        {content(3)}
                    </p>

                    <Accordion isOpen={showCode2}>
                        <pre className="line-numbers">
                            <code className="language-jsx">{htmlcode2}</code>
                        </pre>
                    </Accordion>

                    <hr />
                    <button onClick={() => setFlag(!flag)}>
                        toggle content ( 5s - linear )
                    </button>
                    <button className="code" onClick={() => setCodeFlag(!showCode)}>
                        {!showCode ? 'show' : 'hide'} code
                    </button>
                    <Accordion isOpen={flag} duration={`5s`} timingFunc={'linear'}>
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

                    <Accordion isOpen={showCode}>
                        <pre className="line-numbers">
                            <code className="language-jsx">{htmlcode3}</code>
                        </pre>
                    </Accordion>
                </section>
            </div>
        </Layout>
    );
}

export default App;



const htmlcode1 = `import React, { useState } from 'react';

function App() {
    const [flag, setFlag] = useState(false);

    return <div>
        <button onClick={() => setFlag(!flag)}>
            toggle content ( 1s - ease )
        </button>
        <Accordion isOpen={flag} duration={"1000ms"}>
            <div className="red">
                <p>
                    {content()}
                </p>
            </div>
        </Accordion>
    </div>
}
`;

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
`;

const htmlcode3 = `import React, { useState } from 'react';

function App() {
    const [flag, setFlag] = useState(false);

    return <div>
        <button onClick={() => setFlag(!flag)}>
            toggle content ( 1s - ease )
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
`;
