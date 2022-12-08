import { useState } from 'react';

const Sample20 = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  const doubleCount = count * 2;

  return (
    <div>
      <h1>AI</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={reset}>reset</button>
      <p>{count}</p>
      <p>{doubleCount}</p>
    </div>
  );
};

export default Sample20;
