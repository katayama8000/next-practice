import React from "react";

const Hooks3 = () => {
  const [count, setCount] = React.useState<number>(0);

  const handleAdd = () => {
    setCount((prevCount) => prevCount + 1);
  };

  React.useEffect(() => {
    if (count === 1) {
      alert("true");
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
