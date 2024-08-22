import React, { useState, useEffect } from 'react';

const Example2 = () => {
  const [count, setCount] = useState(0);

  // Effect to log count changes to the console
  useEffect(() => {
    console.log(`Count has been updated to: ${count}`);
  }, [count]); // Dependency array ensures this effect runs whenever count changes

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Example2;
