import React from "react";
import useSWR from "swr";

type Props = {
  userId: 1;
  id: 1;
  title: string;
  body: string;
};

const fetcher = async (args: string) => {
  const ret = await fetch(args);
  return ret.json();
};

export const useGetJson = (id: number) => {
  const { data, error } = useSWR<Props>(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  // データをレンダリングする
  return <div>hello {data.body}!</div>;
};
