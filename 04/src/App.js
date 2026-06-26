import {Element1,Element2,Element3,Element4,Element5} from "./02JSX/01_Basic";
import Basic_01 from "./02JSX/01_Basic"
import CustomComponent from "./02JSX/CustomComponent";
import {Component_Event_01,Component_Event_02,Component_Event_03} from "./02JSX/03_Event"
import MyComponent from "./03Component/MyComponent";
import EventComponent_01 from "./04Event/01OnClick";
import EventComponent_02 from "./04Event/02OnMouse";
import EventComponent_03 from "./04Event/03OnKey";
import EventComponent_04 from "./04Event/04OnChange";
import EventComponent_05 from "./04Event/05OnSubmit";
import EventComponent_06 from "./04Event/06OnScroll";

function App() {
  return (
    <div className="App">
      <h1>EVENT HANDLING</h1>
      <hr/>
      {/* 01 onClick */}
      <EventComponent_01 />
      <hr/>
      {/* 02 onMouse */}
      <EventComponent_02 />
      <hr/>
      {/* 03 onKey */}
      <EventComponent_03 />
      {/* 04 onChange */}
      <EventComponent_04 />
      {/* 05 onSubmit */}
      <EventComponent_05 />
      {/* 06 onScroll */}
      <EventComponent_06 />
    </div>
   
  );
}

export default App;
