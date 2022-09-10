import './App.css';
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={()=>setCount(count*0)}>Reset</button>
    </div>
  );
}

export default App;