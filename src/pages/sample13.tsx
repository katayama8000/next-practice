import type { NextPage } from "next";
import React from "react";

type Props = {
  data: jsonplaceholderType;
};
const sample13: NextPage<Props> = (props) => {
  console.log(props);
  return (
    <div>
      <h1>ssg</h1>
      <ul>
        <li>userId: {props.data.userId}</li>
        <li>id: {props.data.id}</li>
        <li>title: {props.data.title}</li>
        <li>body: {props.data.body}</li>
      </ul>
    </div>
  );
};

// ssg
export const getStaticProps = async () => {
  console.log("getStaticProps");
  // jsonplaceholderからデータを取得
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
};

// ssgは、ビルド時にデータを取得する。
// そのため、ビルド時にデータが取得できない場合は、ビルドエラーになる。
// そのため、データが取得できない場合は、getServerSidePropsを使用する。

export default sample13;
