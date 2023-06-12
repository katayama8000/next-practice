import { useState } from 'react';

export const useStateHook = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('initial text');

  const increment = () => {
    setCount((count) => {
      return count + 1;
    });
  };

  const decrement = () => {
    setCount((count) => {
      return count - 1;
    });
  };

  const reset = () => {
    setCount(0);
  };

  return { count, decrement, increment, reset, setText, text };
};
