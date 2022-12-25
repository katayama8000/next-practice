import { useState } from 'react';

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => {
  return {
    id: `id${n}`,
    value: n,
  };
});
const Sample14 = () => {
  const [numbers, setNumbers] = useState(data);

  const renderItems = (n: { id: string; value: number }) => {
    return (
      <h1
        key={n.id}
        onClick={() => {
          deleteItem(n.id);
        }}
      >
        {n.value}
      </h1>
    );
  };

  const deleteItem = (id: string) => {
    setNumbers(
      numbers.filter((n) => {
        return n.id !== id;
      })
    );
  };

  return (
    <div>
      {numbers.map((n) => {
        return renderItems(n);
      })}
    </div>
  );
};

export default Sample14;
