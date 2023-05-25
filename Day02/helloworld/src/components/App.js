import Blog from "./Blog";
import EventSample from "./EventSample";

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
      <h1>Hello World!</h1>
      <hr/>
      <EventSample/>
      <hr/>
      {/* <Blog age={12} name="Tommy" isactive={true} 
      users={users}  onClick={onHandleClick}/> */}
   </div>
  );
}

export default App;
