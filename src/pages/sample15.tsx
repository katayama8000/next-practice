import { Button } from "@mantine/core";
import React from "react";

const Sample15 = () => {
  const [names, setNames] = React.useState<string[]>(["john", "jane", "joe"]);

  // ミュータブルに更新
  const onClick = () => {
    // reactのstateはミュータブルに更新すると、再レンダリングされない。
    // reactはオブジェクト同一性(差分)を見て再レンダリングする。
    // そのため、ミュータブルに更新すると再レンダリングされない。
    names.push("push");
    const copy = [...names];
    copy.push("hoge");
    setNames(copy);
  };

  return (
    <div>
      <h1>immutable</h1>
      <div>
        <button onClick={onClick}>button</button>
        {names.map((name, index) => (
          <p key={index}>{name}</p>
        ))}
      </div>
      <Button
        onClick={() => {
          console.log(names);
        }}
      >
        check
      </Button>
    </div>
  );
};

export default Sample15;
