import { useCallback, useEffect, useState } from 'react';

const Sample29 = () => {
  const [num, setNum] = useState<number>(0);
  const add = useCallback(() => {
    return 10;
  }, []);

  useEffect(() => {
    const ret = add();
    console.log('hello', ret);
  }, [add]);

  return (
    <div>
      <h1>sample29</h1>
      <p>{num}</p>
      <button
        onClick={() => {
          return setNum(num + 1);
        }}
      >
        inc
      </button>
    </div>
  );
};

export default Sample29;
