import { useMemo, useState } from 'react';

const Sample11 = () => {
  const [count1, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  //useMemoは値を返す。
  //useCallbackは関数を返す。
  const double = useMemo(() => {
    console.log('double');
    return count1 * 2;
  }, [count1]);

  return (
    <div>
      <h1>useMemo</h1>
      <div>
        <button
          onClick={() => {
            return setCount(count1 + 1);
          }}
        >
          count up
        </button>
        <button
          onClick={() => {
            return setCount2(count2 + 1);
          }}
        >
          count2 up
        </button>
        <p>count: {count1}</p>
        <p>count2: {count2}</p>
        <p>double: {double}</p>
      </div>
    </div>
  );
};

export default Sample11;
