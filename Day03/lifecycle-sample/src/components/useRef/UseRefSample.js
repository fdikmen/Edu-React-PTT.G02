import React, { useRef } from 'react';

function UseRefSample() {
  // Create a ref using useRef hook
  const inputRef = useRef(null);
  const input2Ref = useRef(null);

  // Handle click event
  const focusInput = () => {
    // Focus on the input element using inputRef.current
    inputRef.current.focus();
  };

  return (
    <div>
      {/* Input element with ref */}
      <input ref={inputRef} type="text" />
      <input ref={input2Ref} type="text" />
      {/* Button to focus on the input */}
      <button onClick={focusInput}>Focus on Input</button>
    </div>
  );
}

export default UseRefSample;
