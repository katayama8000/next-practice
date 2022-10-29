import { useQuery } from '@tanstack/react-query';
import React from 'react';

export const useGetTodo = () => {
  //react-queryのuseQueryを使ってデータを取得
  const { data, isLoading, isError } = useQuery(['todo'], () =>
    fetch('https://jsonplaceholder.typicode.com/todos').then((res) => {
      return res.json();
    })
  );

  return { data, isLoading, isError };
};
