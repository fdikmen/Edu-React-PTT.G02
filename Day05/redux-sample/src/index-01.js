import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createStore } from 'redux';

const myReducer = (state = "Hello Redux.", action) => {
  console.log("myReducer. State: ", state, " Action:", action);
  if (action.type === "CHANGE_NAME") {
    return action.payload;
  }
  else if (action.type === "CHANGE_NAME2") {
    return action.payload;
  }
  else if (action.type === "TEST") {
    console.log("TEST");
    return state;
  }
  return state;
}

const myStore = createStore(myReducer);

console.log("First:", myStore.getState());

//myStore.subscribe(() => { console.log("First.subscribe:", myStore.getState()) });
// send action to reducer => myStore.dispatch();
console.log("First.dispatch");
const myAction = { type: "CHANGE_NAME", payload: "Jane" };
myStore.dispatch(myAction);

console.log("Second:", myStore.getState());

const myAction2 = {
  type: "CHANGE_NAME2",
  payload: { name: 'Tommy', age: 12, address: { city: 'Flo', street: [1, 2, 3, 4], isActive: true } }
};
myStore.dispatch(myAction2);

console.log("Third:", myStore.getState());

myStore.dispatch({ type: "TEST" });
console.log("Four:", myStore.getState());

// action = { type: MUST-BE, payload: OPTIONAL };














const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

