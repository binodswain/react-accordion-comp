# react-accordion-comp

[![release](https://badgen.net/npm/v/react-accordion-comp)](https://www.npmjs.com/package/react-accordion-comp)
[![open issues](https://badgen.net/github/open-issues/binodswain/react-accordion-comp)](https://github.com/binodswain/react-accordion-comp/issues)
[![license](https://badgen.net/github/license/binodswain/react-accordion-comp)](https://github.com/binodswain/react-accordion-comp/blob/master/LICENSE)
[![Test Status](https://github.com/binodswain/react-accordion-comp/workflows/Test/badge.svg)](https://github.com/binodswain/react-accordion-comp/actions?query=workflow%3ATest)
[![Build Status](https://github.com/binodswain/react-accordion-comp/workflows/Build/badge.svg)](https://github.com/binodswain/react-accordion-comp/actions?query=workflow%3ABuild)

React package to render accordion component.
[view demo](https://binodswain.github.io/react-accordion-comp/)

## Install

```bash
npm install --save react-faq-component
```

## Usage

```jsx
import React, { useState } from 'react';
import Accordion from "react-accordion-comp";

function App() {
    const [flag, setFlag] = useState(false);

    return (
        <div className="container">
            <button onClick={()=>setFlag1(!flag1)}>
                toggle content
            </button>
            <Accordion isOpen={flag1}>
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
```

## props

The data passed to react-faq-component is an object having below keys(mentioned in the table).

| attribute |  type   | optional | details                      |
| --------- | :-----: | :------: | :--------------------------- |
| isOpen    | boolean |  false   | flag to toggle the component |

## Demo gif

![Screenshot 1](/example/accordion.gif?raw=true "closed state")

## License

MIT © [binodswain](https://github.com/binodswain)
