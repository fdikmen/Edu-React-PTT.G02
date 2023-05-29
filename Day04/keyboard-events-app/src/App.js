import React, { useEffect } from 'react';
function App() {
  useEffect(() => {
    const handleKeyDown = (event) => {
      console.log("Key Pressed: ", event.key);  
    }

    const handleKeyUp = (event) => {
      console.log("Key Released: ", event.key);  
    }
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    }
    
  }, [])
  

  return (
    <div>
      <h1>Keyboard Events</h1>
      <p>

      </p>
    </div>
  );
}

export default App;
