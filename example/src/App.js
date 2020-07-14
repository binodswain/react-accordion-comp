import React, {useState} from 'react';
import './App.scss';
import Accordion from "react-accordion-comp";

function App() {
  const [flag, setFlag] = useState(false);
  // console.log(flag);

  return (
    <div className="container">
      <button onClick={()=>setFlag(!flag)}>
        toggle content
      </button>
      <Accordion isOpen={flag}>
        <div className="red">
          <p>

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam iaculis ultricies tristique. Phasellus eleifend elit mi, eu consequat nisl dictum hendrerit. Vivamus sagittis arcu lacinia aliquet tempus. Maecenas vitae commodo purus. Nullam aliquam eros a feugiat hendrerit. Integer porttitor eu metus sit amet mollis. Nam et luctus nunc. Donec bibendum condimentum lectus, rhoncus aliquet nulla interdum a.
            Nunc a volutpat leo. Cras lobortis volutpat imperdiet. Ut feugiat ultrices auctor. Proin faucibus diam at ipsum commodo placerat. Vivamus posuere interdum ligula, id molestie est euismod ac. Proin sed lacus vitae lorem porttitor semper et nec tellus. Integer aliquam nulla pharetra augue convallis, non interdum purus sodales. Morbi sed purus risus. Sed pretium nulla sit amet lectus gravida, in dictum sem interdum. Praesent tempus ligula a ex volutpat tincidunt. Nullam sit amet odio dictum odio posuere maximus sit amet non diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          </p>
        </div>
      </Accordion>

      <div className="green">
        <h2>title</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam iaculis ultricies tristique. Phasellus eleifend elit mi, eu consequat nisl dictum hendrerit. Vivamus sagittis arcu lacinia aliquet tempus. Maecenas vitae commodo purus. Nullam aliquam eros a feugiat hendrerit. Integer porttitor eu metus sit amet mollis. Nam et luctus nunc. Donec bibendum condimentum lectus, rhoncus aliquet nulla interdum a.
            Suspendisse semper suscipit ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam nec tristique arcu. Praesent velit magna, finibus nec nibh ut, laoreet iaculis ex. Nullam tincidunt turpis ac turpis iaculis, non bibendum metus tristique. In hac habitasse platea dictumst. Curabitur vel magna in lacus cursus consequat. Morbi sem turpis, viverra ut lacus sed, tincidunt tristique est. Sed condimentum ac leo sed euismod. Cras non lobortis nibh, in accumsan diam. Quisque tincidunt lacus eu suscipit sagittis. Nam eleifend vel lacus in tincidunt. Proin eget lectus sapien.
            Nunc a volutpat leo. Cras lobortis volutpat imperdiet. Ut feugiat ultrices auctor. Proin faucibus diam at ipsum commodo placerat. Vivamus posuere interdum ligula, id molestie est euismod ac. Proin sed lacus vitae lorem porttitor semper et nec tellus. Integer aliquam nulla pharetra augue convallis, non interdum purus sodales. Morbi sed purus risus. Sed pretium nulla sit amet lectus gravida, in dictum sem interdum. Praesent tempus ligula a ex volutpat tincidunt. Nullam sit amet odio dictum odio posuere maximus sit amet non diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          </p>
      </div>
    </div>
  );
}

export default App;
