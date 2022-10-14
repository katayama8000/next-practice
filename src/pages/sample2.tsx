import { useGetJson } from "@hooks/useGetJson";
import React from "react";

const Sample2 = () => {
  const value = useGetJson(1);
  return (
    <>
      <h1>useSWR</h1>
      {value}
    </>
  );
};

export default Sample2;
