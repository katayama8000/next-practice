import { useEffect, useState } from 'react';

const Hooks3 = () => {
  const [count, setCount] = useState<number>(0);

  const handleAdd = () => {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  };

  useEffect(() => {
    if (count === 1) {
      alert('true');
    }
  }, [count]);
  return (
    <div>
      <h1>Hooks3</h1>
      <button
        onClick={() => {
          handleAdd();
        }}
      >
        add
      </button>
    </div>
  );
};

export default Hooks3;
