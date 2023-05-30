import Users from "./components/Users";

import { userContext } from "./context/rootContext";
function App() {

  const userdetail = {id:1, name:'Jane', age: 30, address:'Ankara' }
  return (
    <div>
     <h1>Context Sample</h1>
     <userContext.Provider value={userdetail}>
     <Users/>
      </userContext.Provider>
    </div>
  );
}

export default App;
