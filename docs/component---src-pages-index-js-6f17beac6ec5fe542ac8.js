(window.webpackJsonp = window.webpackJsonp || []).push([
    [6],
    {
        PdVa: function (e) {
            e.exports = JSON.parse(
                '{"data":{"site":{"siteMetadata":{"title":"react-accordion-comp","description":"React package📦 to render accordion component."}}}}',
            );
        },
        RXBc: function (e, t, a) {
            
            a.r(t);
            const n = a("q1tI"),
                c = a.n(n),
                r = a("Wbzz"),
                o = a("Bl7J"),
                i = a("vrFN"),
                l = a("TwNY"),
                s = a("jvB/"),
                m = a("jHpe"),
                u = a.n(m),
                d =
                    (a("y1X9"),
                    a("QWvX"),
                    a("ZgVT"),
                    a("bPOv"),
                    a("85O/"),
                    a("CjHp"),
                    a("hL/g"),
                    a("PdVa")),
                p = function () {
                    const e = d.data;
                    console.log(e);
                    const t = e.site.siteMetadata,
                        a = t.title,
                        n = t.description;
                    return c.a.createElement(
                        "header",
                        { className: "banner-sec" },
                        c.a.createElement(
                            "div",
                            {
                                style: {
                                    margin: "0 auto",
                                    maxWidth: 960,
                                    padding: "6.45rem 1.0875rem",
                                    marginBottom: "1em",
                                },
                            },
                            c.a.createElement("h1", { style: { margin: 0 } }, a),
                            c.a.createElement("p", { className: "banner-text" }, n),
                            c.a.createElement("div", { className: "button-sec" }),
                        ),
                    );
                };
            p.defaultProps = { siteTitle: "" };
            const g = p,
                E = a("W/9C");
            a("jMLs"),
            (t.default = function () {
                const e = Object(n.useState)(!1),
                    t = e[0],
                    a = e[1],
                    m = Object(n.useState)(!1);
                m[0], m[1];
                return (
                    Object(n.useEffect)(function () {
                        u.a.highlightAll();
                    }, []),
                    c.a.createElement(
                        n.Fragment,
                        null,
                        c.a.createElement(i.a, { title: "react-accordion-comp" }),
                        c.a.createElement(g, null),
                        c.a.createElement(
                            o.a,
                            null,
                            c.a.createElement(l.a, null),
                            c.a.createElement(
                                "section",
                                { className: "badges" },
                                c.a.createElement(
                                    "a",
                                    {
                                        href:
                                                "https://www.npmjs.com/package/react-accordion-comp",
                                    },
                                    c.a.createElement("img", {
                                        src: "https://badgen.net/npm/v/react-accordion-comp",
                                        alt: "release",
                                    }),
                                ),
                                c.a.createElement(
                                    "a",
                                    {
                                        href:
                                                "https://github.com/binodswain/react-accordion-comp/issues",
                                    },
                                    c.a.createElement("img", {
                                        src:
                                                "https://badgen.net/github/open-issues/binodswain/react-accordion-comp",
                                        alt: "open-issues",
                                    }),
                                ),
                                c.a.createElement(
                                    "a",
                                    {
                                        href:
                                                "https://github.com/binodswain/react-accordion-comp/blob/master/LICENSE",
                                    },
                                    c.a.createElement("img", {
                                        src:
                                                "https://badgen.net/github/license/binodswain/react-accordion-comp",
                                        alt: "license",
                                    }),
                                ),
                                c.a.createElement(
                                    "a",
                                    {
                                        href:
                                                "https://github.com/binodswain/react-accordion-comp/actions?query=workflow%3ATest",
                                    },
                                    c.a.createElement("img", {
                                        src:
                                                "https://github.com/binodswain/react-accordion-comp/workflows/Test/badge.svg",
                                        alt: "test status",
                                    }),
                                ),
                                c.a.createElement(
                                    "a",
                                    {
                                        href:
                                                "https://github.com/binodswain/react-accordion-comp/actions?query=workflow%3ABuild",
                                    },
                                    c.a.createElement("img", {
                                        src:
                                                "https://github.com/binodswain/react-accordion-comp/workflows/Build/badge.svg",
                                        alt: "build status",
                                    }),
                                ),
                            ),
                            c.a.createElement(
                                "section",
                                { className: "demo" },
                                c.a.createElement("h2", null, "Demo"),
                                c.a.createElement(
                                    "div",
                                    { style: { marginBottom: "1em" } },
                                    c.a.createElement(
                                        "button",
                                        {
                                            onClick: function () {
                                                return a(!t);
                                            },
                                            style: {
                                                backgroundColor: "#5000ca",
                                                color: "white",
                                                border: "none",
                                                padding: "0.45em 0.75em",
                                                borderRadius: 5,
                                            },
                                        },
                                        "toggle content ( 1s - ease )",
                                    ),
                                ),
                                c.a.createElement(
                                    s.a,
                                    { isOpen: t, duration: "1000ms" },
                                    c.a.createElement(
                                        "div",
                                        { className: "content" },
                                        c.a.createElement(
                                            "p",
                                            null,
                                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                                        ),
                                    ),
                                ),
                                c.a.createElement(
                                    "div",
                                    null,
                                    c.a.createElement(
                                        r.a,
                                        { to: "/demo-more" },
                                        "View more demo",
                                    ),
                                ),
                            ),
                            c.a.createElement(
                                "section",
                                { className: "usage" },
                                c.a.createElement("h3", null, "Usage"),
                                c.a.createElement("div", null, "Install the package."),
                                c.a.createElement(
                                    "pre",
                                    null,
                                    c.a.createElement(
                                        "code",
                                        { className: "language-markup" },
                                        "npm install --save react-accordion-comp",
                                    ),
                                ),
                                c.a.createElement("div", null, "Import the package."),
                                c.a.createElement(
                                    "pre",
                                    null,
                                    c.a.createElement(
                                        "code",
                                        { className: "language-jsx" },
                                        "import Faq from 'react-accordion-comp';",
                                    ),
                                ),
                                "Import styles to application. Import in a SCSS file.",
                                c.a.createElement(
                                    "pre",
                                    null,
                                    c.a.createElement(
                                        "code",
                                        { className: "language-jsx" },
                                        '@import "~react-accordion-comp/dist/styles.css";',
                                    ),
                                ),
                                "Or in JSX file.",
                                c.a.createElement(
                                    "pre",
                                    null,
                                    c.a.createElement(
                                        "code",
                                        { className: "language-jsx" },
                                        'import "react-accordion-comp/dist/styles.css";',
                                    ),
                                ),
                                c.a.createElement("br", null),
                                c.a.createElement("strong", null, "Code example: "),
                                c.a.createElement("br", null),
                                c.a.createElement(
                                    "pre",
                                    { className: "line-numbers" },
                                    c.a.createElement(
                                        "code",
                                        { className: "language-jsx" },
                                        'import React, { useState } from \'react\';\nimport Accordion from "react-accordion-comp";\n\nfunction App() {\n    const [flag, setFlag] = useState(false);\n\n    return (\n        <div className="container">\n            <button onClick={()=>setFlag(!flag)}>\n                toggle content\n            </button>\n            <Accordion isOpen={flag}>\n                <div className="red">\n                    <p>\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                        In sed tempor sem. Aenean vel turpis feugiat,\n                        ultricies metus at, consequat velit. Curabitur est nibh,\n                        varius in tellus nec, mattis pulvinar metus.\n                        In maximus cursus lorem, nec laoreet velit eleifend vel.\n                        Ut aliquet mauris tortor, sed egestas libero interdum vitae.\n                        Fusce sed commodo purus, at tempus turpis.\n                    </p>\n                </div>\n            </Accordion>\n        </div>\n}\n',
                                    ),
                                ),
                            ),
                        ),
                        c.a.createElement(E.a, null),
                    )
                );
            });
        },
        jMLs: function (e, t, a) {},
    },
]);
//# sourceMappingURL=component---src-pages-index-js-6f17beac6ec5fe542ac8.js.map
