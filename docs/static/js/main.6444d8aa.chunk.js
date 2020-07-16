(this.webpackJsonpexample = this.webpackJsonpexample || []).push([
    [0],
    [,,,,        ,        ,        ,        
        
        
        
        function (e, t, n) {
            e.exports = n(22);
        },,,        ,        ,
        
        
        function (e, t, n) {},
        function (e, t, n) {},,,        ,        ,
        
        
        function (e, t, n) {},
        function (e, t, n) {},
        function (e, t) {},,        
        function (e, t, n) {
            
            n.r(t);
            const a = n(0),
                r = n.n(a),
                c = n(5),
                o = n.n(c),
                i = (n(12), n(1)),
                s = (n(13), n(3)),
                l = n.n(s),
                u = n(2),
                m = n.n(u);
            function p(e, t) {
                for (let n = 0; n < t.length; n++) {
                    const a = t[n];
                    (a.enumerable = a.enumerable || !1),
                    (a.configurable = !0),
                    "value" in a && (a.writable = !0),
                    Object.defineProperty(e, a.key, a);
                }
            }
            function d(e, t, n) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                        })
                        : (e[t] = n),
                    e
                );
            }
            function f(e, t) {
                const n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    let a = Object.getOwnPropertySymbols(e);
                    t &&
                        (a = a.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                    n.push.apply(n, a);
                }
                return n;
            }
            function h(e) {
                for (let t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? f(n, !0).forEach(function (t) {
                            d(e, t, n[t]);
                        })
                        : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                            : f(n).forEach(function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                            });
                }
                return e;
            }
            function b(e) {
                return (b = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (e) {
                        return e.__proto__ || Object.getPrototypeOf(e);
                    })(e);
            }
            function g(e, t) {
                return (g =
                    Object.setPrototypeOf ||
                    function (e, t) {
                        return (e.__proto__ = t), e;
                    })(e, t);
            }
            function E(e) {
                if (void 0 === e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called",
                    );
                return e;
            }
            const O = (function (e) {
                function t(e) {
                    let n, a;
                    return (
                        (function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError("Cannot call a class as a function");
                        })(this, t),
                        this,
                        (a = b(t).call(this, e)),
                        (n = !a || ("object" != typeof a && "function" != typeof a) ? E(this) : a),
                        d(E(n), "setHeight", function () {
                            const e = n.props.isOpen,
                                t = n.itemRef.current.scrollHeight;
                            n.setState({ height: e ? t : 0 });
                        }),
                        d(E(n), "finishTransition", function () {
                            const e = n.props.isOpen;
                            n.setState({ className: e ? "open" : "close" });
                        }),
                        (n.itemRef = l.a.createRef()),
                        (n.state = { height: 0, className: "close" }),
                        n
                    );
                }
                let n, a;
                return (
                    (function (e, t) {
                        if ("function" != typeof t && null !== t)
                            throw new TypeError(
                                "Super expression must either be null or a function",
                            );
                        (e.prototype = Object.create(t && t.prototype, {
                            constructor: { value: e, writable: !0, configurable: !0 },
                        })),
                        t && g(e, t);
                    })(t, s.PureComponent),
                    (n = t),
                    (a = [
                        {
                            key: "getSnapshotBeforeUpdate",
                            value: function (e, t) {
                                const n = e.isOpen,
                                    a = this.props.isOpen;
                                return a !== n ? { className: a ? "opening" : "closing" } : null;
                            },
                        },
                        {
                            key: "componentDidUpdate",
                            value: function (e, t, n) {
                                null !== n && this.setState(h({}, n), this.setHeight);
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                const e = this.props,
                                    t = e.children,
                                    n = (e.isOpen, e.duration),
                                    a = e.timingFunc,
                                    r = this.state,
                                    c = r.height,
                                    o = r.className,
                                    i = { "--transition-duration": n, "--timing-function": a },
                                    s = h(
                                        d({}, "close" === o || "open" === o ? "" : "height", c),
                                        i,
                                    );
                                return l.a.createElement(
                                    "div",
                                    {
                                        className: "react-accordion-comp ".concat(o),
                                        onTransitionEnd: this.finishTransition,
                                        ref: this.itemRef,
                                        style: s,
                                    },
                                    t,
                                );
                            },
                        },
                    ]) && p(n.prototype, a),
                    t
                );
            })();
            d(O, "propTypes", {
                isOpen: m.a.bool.isRequired,
                children: m.a.any,
                duration: m.a.string,
                timingFunc: m.a.string,
            });
            const v = O,
                w = function () {
                    for (
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                            t =
                                "Nam iaculis ultricies tristique. Phasellus eleifend elit mi, euhendrerit.",
                            n = [],
                            a = 0;
                        a < e;
                        a++
                    )
                        n.push(t);
                    return n;
                },
                j = function () {
                    return r.a.createElement(
                        "a",
                        {
                            href: "https://github.com/binodswain/react-faq-component",
                            class: "github-corner",
                            "aria-label": "View source on GitHub",
                        },
                        r.a.createElement(
                            "svg",
                            {
                                width: "80",
                                height: "80",
                                viewBox: "0 0 250 250",
                                style: {
                                    fill: "#151513",
                                    color: "#fff",
                                    position: "absolute",
                                    top: 0,
                                    border: 0,
                                    right: 0,
                                },
                                "aria-hidden": "true",
                            },
                            r.a.createElement("path", {
                                d: "M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z",
                            }),
                            r.a.createElement("path", {
                                d:
                                    "M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",
                                fill: "currentColor",
                                style: { transformOrigin: "130px 106px" },
                                class: "octo-arm",
                            }),
                            r.a.createElement("path", {
                                d:
                                    "M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",
                                fill: "currentColor",
                                class: "octo-body",
                            }),
                        ),
                    );
                },
                y =
                    (n(18),
                    n(19),
                    function (e) {
                        const t = e.children;
                        return r.a.createElement(
                            r.a.Fragment,
                            null,
                            r.a.createElement(j, null),
                            r.a.createElement(
                                "div",
                                {
                                    style: {
                                        margin: "0 auto",
                                        maxWidth: 960,
                                        padding: "0px 1.0875rem 1.45rem",
                                        paddingTop: 0,
                                    },
                                },
                                r.a.createElement("h1", null, "react-accordion-comp"),
                                r.a.createElement("main", null, t),
                                r.a.createElement(
                                    "footer",
                                    null,
                                    "MIT \xa9 ",
                                    r.a.createElement(
                                        "a",
                                        { href: "https://github.com/binodswain" },
                                        "binodswain",
                                    ),
                                    " ",
                                    r.a.createElement("br", null),
                                ),
                            ),
                        );
                    }),
                C = (n(20), n(6)),
                N = n.n(C);
            var k = function () {
                    const e = Object(a.useState)(!1),
                        t = Object(i.a)(e, 2),
                        n = t[0],
                        c = t[1],
                        o = Object(a.useState)(!1),
                        s = Object(i.a)(o, 2),
                        l = s[0],
                        u = s[1],
                        m = Object(a.useState)(!1),
                        p = Object(i.a)(m, 2),
                        d = p[0],
                        f = p[1],
                        h = Object(a.useState)(!1),
                        b = Object(i.a)(h, 2),
                        g = b[0],
                        E = b[1],
                        O = Object(a.useState)(!1),
                        j = Object(i.a)(O, 2),
                        C = j[0],
                        k = j[1],
                        A = Object(a.useState)(!1),
                        F = Object(i.a)(A, 2),
                        T = F[0],
                        R = F[1];
                    return (
                        Object(a.useEffect)(function () {
                            setTimeout(function () {
                                N.a.highlightAll();
                            }, 0);
                        }, []),
                        r.a.createElement(
                            y,
                            null,
                            r.a.createElement(
                                "div",
                                { className: "page" },
                                r.a.createElement(
                                    "section",
                                    { className: "badges" },
                                    r.a.createElement(
                                        "a",
                                        {
                                            href:
                                                "https://www.npmjs.com/package/react-accordion-comp",
                                        },
                                        r.a.createElement("img", {
                                            src: "https://badgen.net/npm/v/react-accordion-comp",
                                            alt: "release",
                                        }),
                                    ),
                                    r.a.createElement(
                                        "a",
                                        {
                                            href:
                                                "https://github.com/binodswain/react-accordion-comp/issues",
                                        },
                                        r.a.createElement("img", {
                                            src:
                                                "https://badgen.net/github/open-issues/binodswain/react-accordion-comp",
                                            alt: "open-issues",
                                        }),
                                    ),
                                    r.a.createElement(
                                        "a",
                                        {
                                            href:
                                                "https://github.com/binodswain/react-accordion-comp/blob/master/LICENSE",
                                        },
                                        r.a.createElement("img", {
                                            src:
                                                "https://badgen.net/github/license/binodswain/react-accordion-comp",
                                            alt: "license",
                                        }),
                                    ),
                                    r.a.createElement(
                                        "a",
                                        {
                                            href:
                                                "https://github.com/binodswain/react-accordion-comp/actions?query=workflow%3ATest",
                                        },
                                        r.a.createElement("img", {
                                            src:
                                                "https://github.com/binodswain/react-accordion-comp/workflows/Test/badge.svg",
                                            alt: "test status",
                                        }),
                                    ),
                                    r.a.createElement(
                                        "a",
                                        {
                                            href:
                                                "https://github.com/binodswain/react-accordion-comp/actions?query=workflow%3ABuild",
                                        },
                                        r.a.createElement("img", {
                                            src:
                                                "https://github.com/binodswain/react-accordion-comp/workflows/Build/badge.svg",
                                            alt: "build status",
                                        }),
                                    ),
                                ),
                                r.a.createElement("h2", null, "Demo"),
                                r.a.createElement(
                                    "section",
                                    { className: "demo" },
                                    r.a.createElement(
                                        "button",
                                        {
                                            onClick: function () {
                                                return u(!l);
                                            },
                                        },
                                        "toggle content ( 1s - ease )",
                                    ),
                                    r.a.createElement(
                                        "button",
                                        {
                                            className: "code",
                                            onClick: function () {
                                                return k(!C);
                                            },
                                        },
                                        C ? "hide" : "show",
                                        " code",
                                    ),
                                    r.a.createElement(
                                        v,
                                        { isOpen: l, duration: "1000ms" },
                                        r.a.createElement(
                                            "div",
                                            { className: "red" },
                                            r.a.createElement("p", null, w()),
                                        ),
                                    ),
                                    r.a.createElement(
                                        v,
                                        { isOpen: C },
                                        r.a.createElement(
                                            "pre",
                                            { className: "line-numbers" },
                                            r.a.createElement(
                                                "code",
                                                { className: "language-jsx" },
                                                S,
                                            ),
                                        ),
                                    ),
                                    r.a.createElement("hr", null),
                                    r.a.createElement(
                                        "button",
                                        {
                                            onClick: function () {
                                                return f(!d);
                                            },
                                        },
                                        "toggle content (default)",
                                    ),
                                    r.a.createElement(
                                        "button",
                                        {
                                            className: "code",
                                            onClick: function () {
                                                return R(!T);
                                            },
                                        },
                                        T ? "hide" : "show",
                                        " code",
                                    ),
                                    r.a.createElement(
                                        v,
                                        { isOpen: d },
                                        r.a.createElement(
                                            "div",
                                            { className: "red" },
                                            r.a.createElement("p", null, w(3)),
                                        ),
                                    ),
                                    r.a.createElement("p", { className: "with-padding" }, w(3)),
                                    r.a.createElement(
                                        v,
                                        { isOpen: T },
                                        r.a.createElement(
                                            "pre",
                                            { className: "line-numbers" },
                                            r.a.createElement(
                                                "code",
                                                { className: "language-jsx" },
                                                P,
                                            ),
                                        ),
                                    ),
                                    r.a.createElement("hr", null),
                                    r.a.createElement(
                                        "button",
                                        {
                                            onClick: function () {
                                                return c(!n);
                                            },
                                        },
                                        "toggle content ( 5s - linear )",
                                    ),
                                    r.a.createElement(
                                        "button",
                                        {
                                            className: "code",
                                            onClick: function () {
                                                return E(!g);
                                            },
                                        },
                                        g ? "hide" : "show",
                                        " code",
                                    ),
                                    r.a.createElement(
                                        v,
                                        { isOpen: n, duration: "5s", timingFunc: "linear" },
                                        r.a.createElement(
                                            "div",
                                            { className: "red" },
                                            r.a.createElement("p", null, w(24)),
                                        ),
                                    ),
                                    r.a.createElement(
                                        "div",
                                        { className: "black with-padding" },
                                        r.a.createElement("h2", null, "title"),
                                        r.a.createElement("p", null, w(12)),
                                    ),
                                    r.a.createElement(
                                        v,
                                        { isOpen: g },
                                        r.a.createElement(
                                            "pre",
                                            { className: "line-numbers" },
                                            r.a.createElement(
                                                "code",
                                                { className: "language-jsx" },
                                                x,
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                        )
                    );
                },
                S =
                    'import React, { useState } from \'react\';\n\nfunction App() {\n    const [flag, setFlag] = useState(false);\n\n    return <div>\n        <button onClick={() => setFlag(!flag)}>\n            toggle content ( 1s - ease )\n        </button>\n        <Accordion isOpen={flag} duration={"1000ms"}>\n            <div className="red">\n                <p>\n                    {content()}\n                </p>\n            </div>\n        </Accordion>\n    </div>\n}\n',
                P =
                    "import React, { useState } from 'react';\n\nfunction App() {\n    const [flag, setFlag] = useState(false);\n\n    return <div>\n        <button onClick={() => setFlag(!flag)}>\n            toggle content ( 1s - ease )\n        </button>\n        <Accordion isOpen={flag}>\n            <div className=\"red\">\n                <p>\n                    {content()}\n                </p>\n            </div>\n        </Accordion>\n    </div>\n}\n",
                x =
                    "import React, { useState } from 'react';\n\nfunction App() {\n    const [flag, setFlag] = useState(false);\n\n    return <div>\n        <button onClick={() => setFlag(!flag)}>\n            toggle content ( 1s - ease )\n        </button>\n        <Accordion isOpen={flag} duration={'5s'} timingFunc={'linear'}>\n            <div className=\"red\">\n                <p>\n                    {content(24)}\n                </p>\n            </div>\n        </Accordion>\n        <div className=\"black with-padding\">\n            <h2>title</h2>\n            <p>\n                {content(12)}\n            </p>\n        </div>\n    </div>\n}\n";
            const A = function () {
                const e = Object(a.useState)(!1),
                    t = Object(i.a)(e, 2),
                    n = (t[0], t[1], Object(a.useState)(!1)),
                    c = Object(i.a)(n, 2),
                    o = (c[0], c[1], Object(a.useState)(!1)),
                    s = Object(i.a)(o, 2);
                return (
                    s[0],
                    s[1],
                    r.a.createElement("div", { className: "" }, r.a.createElement(k, null))
                );
            };
            Boolean(
                "localhost" === window.location.hostname ||
                    "[::1]" === window.location.hostname ||
                    window.location.hostname.match(
                        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/,
                    ),
            );
            o.a.render(
                r.a.createElement(r.a.StrictMode, null, r.a.createElement(A, null)),
                document.getElementById("root"),
            ),
            "serviceWorker" in navigator &&
                    navigator.serviceWorker.ready
                        .then(function (e) {
                            e.unregister();
                        })
                        .catch(function (e) {
                            console.error(e.message);
                        });
        },
    ],
    [[7, 1, 2]],
]);
//# sourceMappingURL=main.6444d8aa.chunk.js.map
