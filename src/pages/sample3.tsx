import React from "react";

const useCounter = () => {
  const [state, setState] = React.useState<number>(0);

  const countUp = React.useCallback(() => {
    setState((prev) => prev + 1);
  }, []);

  const countDown = React.useCallback(() => {
    setState((prev) => prev - 1);
  }, []);

  return { state, countUp, countDown };
};

const Sample3 = () => {
  const { state, countUp, countDown } = useCounter();
  const sum = React.useMemo(() => state * 2, [state]);
  return (
    <div>
      <div>{sum}</div>
      <div>{state}</div>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </div>
  );
};

export default Sample3;
