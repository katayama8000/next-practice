import { useState } from 'react';

const Hooks2 = () => {
  const [count, setCount] = useState<number>(0);

  const adjustCount = (amount: number) => {
    //setCount(count + amount);
    setCount((prevCount) => {
      return prevCount + amount;
    });
  };

  return (
    <div>
      <h1>Hooks2</h1>
      <div>
        <button
          onClick={() => {
            return adjustCount(-1);
          }}
        >
          -
        </button>
        <span>{count}</span>
        <button
          onClick={() => {
            return adjustCount(1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Hooks2;
