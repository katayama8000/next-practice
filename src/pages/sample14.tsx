import React, { useState } from "react";

const Sample14 = () => {
  const [inputId, setInputId] = useState<number[]>([1]);
  const onClick = () => {
    const copy = [...inputId];
    copy.unshift(inputId.length + 1);
    setInputId(copy);
  };
  return (
    <div>
      <h1>key</h1>
      <div>
        {inputId.map((i, index) => (
          <div key={i}>
            <p>
              id:{i}/{index}
            </p>
            <input type="text" />
            <br />
          </div>
        ))}
        <button onClick={onClick} className="button">
          入力フォームを増やす
        </button>
      </div>
    </div>
  );
};

export default Sample14;
