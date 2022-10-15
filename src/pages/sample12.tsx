import React, { FC } from "react";

type Props = {
  data: jsonplaceholderType;
};

type jsonplaceholderType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
const sample12: FC<Props> = (props) => {
  return (
    <div>
      <h1>ssr</h1>
      <ul>
        <li>userId: {props.data.userId}</li>
        <li>id: {props.data.id}</li>
        <li>title: {props.data.title}</li>
        <li>body: {props.data.body}</li>
      </ul>
    </div>
  );
};

// ssr
export const getServerSideProps = async () => {
  console.log("getServerSideProps");
  // jsonplaceholderからデータを取得
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
};

export default sample12;
