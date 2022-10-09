import { useGetJson } from "@hooks/useGetJson";
import React from "react";

const Sample2 = () => {
  const value = useGetJson(1);
  return (
    <>
      <div>sample2</div>
      {value}
    </>
  );
};

export default Sample2;
