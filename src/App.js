import './App.css';
import React,{useState} from 'react';
function App() {

 const [counter , setCounter] = useState(0)

  return (
    <div className="App">
<div className="header"><h1>Counter App</h1></div>
<div className="counter"><h1>{counter}</h1></div>
<div className="btn-container">
  <button onClick={()=>{setCounter(counter + 1)}}>Increment</button>
  <button onClick={()=>{setCounter(0)}} disabled={counter === 0}>Reset</button>
  <button onClick={()=>{setCounter(counter - 1)}} disabled={counter === 0}>Decrement</button>
</div>
    </div>
  );
}

export default App;
