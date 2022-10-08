import React from "react";

const Sample1 = () => {
  const [value, setValue] = React.useState<string>("Hello World");
  const promise = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise is resolved");
      reject("Promise is rejected");
    }, 2000);
  });

  console.log("Promise is created", promise);
  promise.then((data) => {
    console.log("chain", data);
    setValue(data);
  });

  promise.catch((error) => {
    console.log("chain", error);
  });

  return (
    <>
      <div>promise</div>
      <div>{value}</div>
    </>
  );
};

export default Sample1;
