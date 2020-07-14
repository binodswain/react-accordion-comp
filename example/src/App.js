import React, {useState} from 'react';
import './App.scss';
import Accordion from "react-accordion-comp";
import content from "./content";

function App() {
  const [flag, setFlag] = useState(false);
  const [flag1, setFlag1] = useState(false);
  const [flag2, setFlag2] = useState(false);
  // console.log(flag);

  return (
    <div className="container">
      <button onClick={()=>setFlag1(!flag1)}>
        toggle content
      </button>
      <Accordion isOpen={flag1}>
        <div className="red">
          <p>
            {content()}
          </p>
        </div>
      </Accordion>
      <hr/>
      <button onClick={()=>setFlag2(!flag2)}>
        toggle content
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
      <hr/>
      <button onClick={()=>setFlag(!flag)}>
        toggle content
      </button>
      <Accordion isOpen={flag}>
        <div className="red">
          <p>
            {content(24)}
          </p>
        </div>
      </Accordion>

      <div className="green">
        <h2>title</h2>
        <p>
          {content(12)}
        </p>
      </div>
    </div>
  );
}

export default App;
