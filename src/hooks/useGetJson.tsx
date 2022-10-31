import useSWR from 'swr';

type Props = {
  id: 1;
  body: string;
  title: string;
  userId: 1;
};

const fetcher = async (args: string) => {
  const ret = await fetch(args);
  return ret.json();
};

export const useGetJson = (id: number) => {
  const { data, error } = useSWR<Props>(`https://jsonplaceholder.typicode.com/posts/${id}`, fetcher);

  if (error) {
    return <div>failed to load</div>;
  }
  if (!data) {
    return <div>loading...</div>;
  }

  // データをレンダリングする
  return <div>hello {data.body}!</div>;
};
