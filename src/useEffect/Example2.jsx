import React, { useState, useEffect } from 'react';

const Example2 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect updates the document title whenever the count changes
    document.title = `You clicked ${count} times`;
  }, [count]); // Dependency array ensures this effect runs whenever count changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default Example2;
