
import './App.css'
import { useState } from 'react';

function App() {

  const [count, setcount] = useState(15)


  let AddValue = () => {
    setcount(count + 1);
    console.log(count);
  };

  let SubValue = () => {
    setcount(count - 1);
    console.log(count);
  }


  return (
    <>
      <h1>my react App</h1>
      <h2>counter vaue : {count}</h2>
      <button onClick={AddValue}>Add Value</button>{"    "}
      <button onClick={SubValue}>Remove Value</button>
      <p>footer : </p>

    </>
  )
}

export default App
