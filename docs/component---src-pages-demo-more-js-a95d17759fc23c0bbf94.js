(window.webpackJsonp = window.webpackJsonp || []).push([
    [5],
    {
        Agvw: function (e, n, t) {
            
            t.r(n);
            const a = t("q1tI"),
                l = t.n(a),
                c = t("Bl7J"),
                i = t("vrFN"),
                r = t("TwNY"),
                s = t("W/9C"),
                o = t("jvB/"),
                u = t("jHpe"),
                m = t.n(u);
            t("y1X9"), t("QWvX"), t("ZgVT"), t("bPOv"), t("85O/"), t("CjHp"), t("hL/g");
            n.default = function () {
                const e = Object(a.useState)(!1),
                    n = (e[0], e[1], Object(a.useState)(!1)),
                    t = n[0],
                    u = n[1],
                    f = Object(a.useState)(!1),
                    E = f[0],
                    h = f[1],
                    v = Object(a.useState)(!1),
                    b = (v[0], v[1], Object(a.useState)(!1)),
                    N = b[0],
                    O = b[1],
                    w = Object(a.useState)(!1),
                    j = w[0],
                    S = w[1];
                return (
                    Object(a.useEffect)(function () {
                        m.a.highlightAll();
                    }, []),
                    l.a.createElement(
                        a.Fragment,
                        null,
                        l.a.createElement(
                            c.a,
                            null,
                            l.a.createElement(i.a, { title: "More demos" }),
                            l.a.createElement(r.a, null),
                            l.a.createElement("h1", null, "More Demos"),
                            l.a.createElement(
                                "section",
                                { className: "demo" },
                                l.a.createElement("h2", null, "With default config:"),
                                l.a.createElement(
                                    "button",
                                    {
                                        onClick: function () {
                                            return h(!E);
                                        },
                                    },
                                    "toggle content (default)",
                                ),
                                l.a.createElement(
                                    "button",
                                    {
                                        className: "code",
                                        onClick: function () {
                                            return S(!j);
                                        },
                                    },
                                    j ? "hide" : "show",
                                    " code",
                                ),
                                l.a.createElement(
                                    o.a,
                                    { isOpen: E },
                                    l.a.createElement(
                                        "div",
                                        { className: "red" },
                                        l.a.createElement("p", null, d(3)),
                                    ),
                                ),
                                l.a.createElement("p", { className: "with-padding" }, d(3)),
                                l.a.createElement(
                                    o.a,
                                    { isOpen: j },
                                    l.a.createElement(
                                        "pre",
                                        { className: "line-numbers" },
                                        l.a.createElement("code", { className: "language-jsx" }, g),
                                    ),
                                ),
                                l.a.createElement("h2", null, "With default config:"),
                                l.a.createElement(
                                    "button",
                                    {
                                        onClick: function () {
                                            return u(!t);
                                        },
                                    },
                                    "toggle content (5s linear)",
                                ),
                                l.a.createElement(
                                    "button",
                                    {
                                        className: "code",
                                        onClick: function () {
                                            return O(!N);
                                        },
                                    },
                                    N ? "hide" : "show",
                                    " code",
                                ),
                                l.a.createElement(
                                    o.a,
                                    { isOpen: t, duration: "5s", timingFunc: "linear" },
                                    l.a.createElement(
                                        "div",
                                        { className: "red" },
                                        l.a.createElement("p", null, d(3)),
                                    ),
                                ),
                                l.a.createElement("p", { className: "with-padding" }, d(3)),
                                l.a.createElement(
                                    o.a,
                                    { isOpen: N },
                                    l.a.createElement(
                                        "pre",
                                        { className: "line-numbers" },
                                        l.a.createElement("code", { className: "language-jsx" }, p),
                                    ),
                                ),
                            ),
                        ),
                        l.a.createElement(s.a, null),
                    )
                );
            };
            var d = function (e) {
                    void 0 === e && (e = 1);
                    for (var n = [], t = 0; t < e; t++)
                        n.push(
                            "Nam iaculis ultricies tristique. Phasellus eleifend elit mi, euhendrerit.",
                        );
                    return n;
                },
                g =
                    "import React, { useState } from 'react';\n\nfunction App() {\n    const [flag, setFlag] = useState(false);\n\n    return <div>\n        <button onClick={() => setFlag(!flag)}>\n            toggle content ( 1s - ease )\n        </button>\n        <Accordion isOpen={flag}>\n            <div className=\"red\">\n                <p>\n                    {content()}\n                </p>\n            </div>\n        </Accordion>\n    </div>\n}\n",
                p =
                    "import React, { useState } from 'react';\n\nfunction App() {\n    const [flag, setFlag] = useState(false);\n\n    return <div>\n        <button onClick={() => setFlag(!flag)}>\n            toggle content ( 5s - linear )\n        </button>\n        <Accordion isOpen={flag} duration={'5s'} timingFunc={'linear'}>\n            <div className=\"red\">\n                <p>\n                    {content(24)}\n                </p>\n            </div>\n        </Accordion>\n        <div className=\"black with-padding\">\n            <h2>title</h2>\n            <p>\n                {content(12)}\n            </p>\n        </div>\n    </div>\n}\n";
        },
    },
]);
//# sourceMappingURL=component---src-pages-demo-more-js-a95d17759fc23c0bbf94.js.map
