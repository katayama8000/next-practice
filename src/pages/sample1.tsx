import React from "react";

const Sample1 = () => {
  const [value, setValue] = React.useState<string>("Hello World");
  const [allPromiseResolved, setAllPromiseResolved] =
    React.useState<string>("");
  const [firstPromiseResolved, setFirstPromiseResolved] = React.useState("");
  const promise1 = new Promise<string>((resolve, reject) => {
    window.setTimeout(() => {
      resolve("Promise is resolved1 first");
      //reject("Promise is reject first");
    }, 2000);
  });

  const promise2 = new Promise<string>((resolve, reject) => {
    window.setTimeout(() => {
      resolve("Promise is resolved2 second");
      //reject("Promise is reject second");
    }, 2000);
  });

  promise1
    .then((data) => {
      console.log(`first: ${data}`);
      setValue(data);
      return data.concat("wwwwwwwwwwww");
    })
    .catch((val) => {
      console.log(`catch: ${val}`);
      return val;
    })
    .then((data) => {
      console.log(`last: ${data}`);
    });

  Promise.all([promise1, promise2]).then((data) => {
    //console.log("Promise.all", data);
    setAllPromiseResolved(data[1]);
  });

  Promise.race([promise1, promise2]).then((data) => {
    setFirstPromiseResolved(data);
  });

  const asyncFunc = async () => {
    let x, y;
    x = await new Promise<number>((resolve, reject) => {
      window.setTimeout(() => {
        resolve(10);
      }, 2000);
    });

    y = await new Promise<number>((resolve, reject) => {
      window.setTimeout(() => {
        resolve(20);
      }, 2000);
    });

    return x + y;
  };

  const result = async () => {
    const x = await asyncFunc();
    console.log("x", x);
  };

  result();

  return (
    <>
      <div>promise</div>
      <div>{value}</div>
      <div>{allPromiseResolved}</div>
      <div>{firstPromiseResolved}</div>
    </>
  );
};

export default Sample1;
