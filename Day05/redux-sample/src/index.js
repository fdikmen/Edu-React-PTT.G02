import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createStore,combineReducers,Provider } from 'redux';

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


const counterReducer02 = (state = { value: 0 }, { type, payload }) => {
  switch (type) {
    case "INCREMENT02":
      return { value: state.value + 1 };
    case "DECREMENT02":
      return { value: state.value - 1 };
    default:
      return state;
  }
};
const allReducer = combineReducers({counterReducer,counterReducer02});
// Step 2: Create a store using createStore()
const myStore = createStore(allReducer);

// Step 3: Get the current state
console.log("First Counter State Value:", myStore.getState().counterReducer);

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
    <Provider store={myStore}>
          <App />
    </Provider>
  </React.StrictMode>
);

