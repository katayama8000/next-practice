import { useEffect, useState } from 'react';

const Sample25 = () => {
  const [position, setPosition] = useState<'left' | 'right'>('left');
  useEffect(() => {
    window.addEventListener('click', () => {
      func();
    });
  }, []);

  const func = () => {
    console.log(position);
  };
  return (
    <div>
      <h1>sample25</h1>
      <button
        onClick={() => {
          return setPosition(position === 'left' ? 'right' : 'left');
        }}
      >
        {position}
      </button>
      <div
        style={{
          backgroundColor: 'red',
          height: '100px',
          left: position === 'left' ? '0px' : '100px',
          position: 'relative',
          transition: 'left 1s',
          width: '100px',
        }}
      />
      <button onClick={func}>click</button>
    </div>
  );
};

export default Sample25;
