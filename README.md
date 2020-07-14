# react-accordion-comp

[![release](https://badgen.net/npm/v/react-accordion-comp)](https://www.npmjs.com/package/react-accordion-comp)
[![open issues](https://badgen.net/github/open-issues/binodswain/react-accordion-comp)](https://github.com/binodswain/react-accordion-comp/issues)
[![license](https://badgen.net/github/license/binodswain/react-accordion-comp)](https://github.com/binodswain/react-accordion-comp/blob/master/LICENSE)
[![Test Status](https://github.com/binodswain/react-accordion-comp/workflows/Test/badge.svg)](https://github.com/binodswain/react-accordion-comp/actions?query=workflow%3ATest)
[![Build Status](https://github.com/binodswain/react-accordion-comp/workflows/Build/badge.svg)](https://github.com/binodswain/react-accordion-comp/actions?query=workflow%3ABuild)

React package📦 to render accordion component.
[view demo](https://binodswain.github.io/react-accordion-comp/)

## Install

```bash
npm install --save react-faq-component
```

## Usage

### Import styles to application.

import in a SCSS file.

```scss
@import "~react-accordion-comp/dist/styles.css";
```

or in JSX file

```jsx
import "react-accordion-comp/dist/styles.css";
```

### Import component to application.

```jsx
import React, { useState } from 'react';
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
```

## props

The props passed to react-accordion-comp.

| attribute  |  type   | optional | defaultVal | details                       |
| ---------- | :-----: | :------: | :--------: | :---------------------------- |
| isOpen     | boolean |  false   |  `false`   | flag to toggle the component  |
| duration   | string  |   true   |   `0.3s`   | duration of transition        |
| timingFunc | string  |   true   |   `ease`   | timing-function of transition |

## Demo gif

![Screenshot 1](https://github.com/binodswain/react-accordion-comp/raw/master/example/accordion.gif "demo gif")

## License

MIT © [binodswain](https://github.com/binodswain)
