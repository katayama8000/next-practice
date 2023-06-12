import { useStateHook } from '@hooks/useStateHook';

const Sample26 = () => {
  const { count, decrement, increment, reset, setText, text } = useStateHook();
  return (
    <div>
      <h1>Sample26</h1>
      <p>count: {count}</p>
      <p>text: {text}</p>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
      <button
        onClick={() => {
          return setText('text changed');
        }}
      >
        setText
      </button>
    </div>
  );
};

export default Sample26;
