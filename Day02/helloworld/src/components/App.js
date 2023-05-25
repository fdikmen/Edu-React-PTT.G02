import Blog from "./Blog";
import StateSample from "./StateSample";
import EventSample from "./EventSample";
import ClassComp from "./ClassComp";
import FuncComp from "./FuncComp";

function App() {
  const users = [
    { id: 1, name: 'Tommy', age: 12 },
    { id: 2, name: 'Jerry', age: 13 },
  ]

  const onHandleClick = () => {
    console.log("Clicked!")
  }

  return (
   <div>
      {/* <h1>Hello World!</h1> */}
      <ClassComp/>
      <FuncComp/>
      <hr/>
      {/* <EventSample/> */}
      <hr/>
      {/* <StateSample/> */}
      <hr/>
      {/* <Blog age={12} name="Tommy" isactive={true} 
      users={users}  onClick={onHandleClick}/> */}
   </div>
  );
}

export default App;
