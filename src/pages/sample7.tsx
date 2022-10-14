import { useState, useRef } from "react";

const Sample7 = () => {
  const [text, setText] = useState<string>("");
  const inputEl = useRef<HTMLInputElement>(null);
  const handleOnClick = () => {
    console.log(inputEl.current);
    inputEl.current!.focus();
    inputEl.current!.style.color = "red";
  };
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const handleAddNum = () => setCount(count + 1);
  const handleAddRef = () => countRef.current++;

  return (
    <div className="m-auto mt-20 max-w-3xl">
      <h1>useRef-2</h1>
      <input ref={inputEl} type="text" value={text} onChange={handleOnChange} />
      <button onClick={handleOnClick}>フォーカスを当てる</button>
      <div>{count}</div>
      <button onClick={handleAddNum}>Count1アップ</button>
      <div>{countRef.current}</div>
      <button onClick={handleAddRef}>Count2アップ</button>
    </div>
  );
};

export default Sample7;
