import { useCallback, useMemo, useState } from 'react';

const useCounter = () => {
  const [state, setState] = useState<number>(0);

  const countUp = useCallback(() => {
    setState((prev) => {
      return prev + 1;
    });
  }, []);

  const countDown = useCallback(() => {
    setState((prev) => {
      return prev - 1;
    });
  }, []);

  return { countDown, countUp, state };
};

const Sample3 = () => {
  const { countDown, countUp, state } = useCounter();
  const sum = useMemo(() => {
    return state * 2;
  }, [state]);
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
