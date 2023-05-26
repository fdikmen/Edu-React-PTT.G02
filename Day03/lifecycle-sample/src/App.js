import ClassLifecycleSample from "./components/ClassLifecycleSample";
import FuncLifecycleSample from "./components/FuncLifecycleSample";
import UseRefSample from "./components/useRef/UseRefSample";

function App() {
  return (
    <div>
      <h1>React Life Cycle</h1>
      {/* <ClassLifecycleSample /> */}
      <FuncLifecycleSample />
      <UseRefSample />
    </div>
  );
}

export default App;
