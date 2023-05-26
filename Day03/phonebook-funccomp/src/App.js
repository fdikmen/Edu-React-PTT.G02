import Contact from "./components/Contact";
function App() {
  const copyrightStyle = {
    textAlign: 'center',
    fontSize: '0.7rem',
    color: 'gray'
  }
  return (
    <div>
      <h1 style={{textAlign:'center'}}>Phonebook App</h1>
      <Contact />
      <p style={copyrightStyle}>
        Copyright 2023
      </p>
    </div>
  );
}

export default App;
