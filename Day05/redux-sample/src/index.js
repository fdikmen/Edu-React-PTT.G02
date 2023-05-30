import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createStore } from 'redux';

// Step 1: Create a reducer function
/*
function counterReducer(state={value:0},{type,payload}) {
  if (type === "INCREMENT") {
    return {value:state.value+1};
  }
  else if (type === "DECREMENT") {
    return {value:state.value-1};
  }
  return state;
}
*/
const counterReducer = (state = { value: 0 }, { type, payload }) => {
  switch (type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return state;
  }
};

// Step 2: Create a store using createStore()
const myStore = createStore(counterReducer);

// Step 3: Get the current state
console.log("First Counter State Value:", myStore.getState());

// Step 3: Subscribe to the store to get notified of state changes
myStore.subscribe(() => { console.log("Subscribe Counter State Value:", myStore.getState()) });

// Step 4: Dispatch an action to update the state
myStore.dispatch({ type: "INCREMENT" });
myStore.dispatch({ type: "INCREMENT" });
myStore.dispatch({ type: "INCREMENT" });
myStore.dispatch({ type: "INCREMENT" });

myStore.dispatch({ type: "DECREMENT" });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

