import { useState } from 'react';
import '../depo/styles.css';

export function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(current => current + 1 )
  };

  const handleDecrement = () => {
    setCount(current => current - 1);
  }

  const handleReset = () => {
    setCount(0);
  }

  return (
    <div className="table-wrapper">
      <h2>Count: {count}</h2>
      <div>
        <button className="btn btn-primary btn-inc" onClick={handleIncrement}>Increment</button>
        <button className="btn btn-primary btn-dec" onClick={handleDecrement}>Decrement</button>
        <button className="btn btn-primary btn-reset" onClick={handleReset}>Reset</button>
      </div>
    </div>
  )
}