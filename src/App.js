import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to My React Website</h1>
      <p>This is a simple React app with a counter feature.</p>

      <div>
        <h2>Counter: {count}</h2>
        <button onClick={increment} style={{ margin: '5px', padding: '10px' }}>Increase</button>
        <button onClick={decrement} style={{ margin: '5px', padding: '10px' }}>Decrease</button>
      </div>
    </div>
  );
}

export default App;