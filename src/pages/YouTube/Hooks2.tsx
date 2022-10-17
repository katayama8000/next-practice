import React from "react";

const Hooks2 = () => {
  const [count, setCount] = React.useState<number>(0);

  const adjustCount = (amount: number) => {
    //setCount(count + amount);
    setCount((prevCount) => prevCount + amount);
  };

  return (
    <div>
      <h1>Hooks2</h1>
      <div>
        <button onClick={() => adjustCount(-1)}>-</button>
        <span>{count}</span>
        <button onClick={() => adjustCount(1)}>+</button>
      </div>
    </div>
  );
};

export default Hooks2;
