import { Button } from "@mantine/core";
import React from "react";
import { TButton } from "src/lib/TButton";

const Sample6 = () => {
  const ref = React.useRef<number>(0);
  const once = React.useRef(true);
  ref.current = 10;
  const inputElement = React.useRef<HTMLInputElement>(null);

  const [count, setCount] = React.useState(0);

  const prevCountRef = React.useRef<number>(0);
  // 前のcountを保持する
  React.useEffect(() => {
    prevCountRef.current = count;
  });
  const prevCount = prevCountRef.current;

  React.useEffect(() => {
    if (!once.current) return;
    // 実行したい処理
    once.current = false;
  }, []);

  // useEffectの第二引数にuseRefを指定すると、初回のみ実行される
  React.useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  }, [inputElement.current]);
  return (
    <div className="m-auto mt-20 max-w-3xl">
      <article>
        <h1>useref</h1>
        {ref.current}
      </article>
      <input ref={inputElement} />
      <span className="p-2">
        <TButton
          onClick={() => {
            inputElement.current?.focus();
          }}
        >
          Click
        </TButton>
      </span>
      <div>
        Now:{count}/Before:{prevCount}
      </div>
      <Button
        onClick={() => {
          setCount((pre) => pre + 1);
        }}
      >
        +
      </Button>
    </div>
  );
};

export default Sample6;
