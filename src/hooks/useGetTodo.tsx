import { useQuery } from '@tanstack/react-query';
import { showNotification } from '@mantine/notifications';

export const useGetTodo = () => {
  //react-queryのuseQueryを使ってデータを取得
  const { data, isLoading, isError } = useQuery(
    ['todo'],
    () =>
      fetch('https://jsonplaceholder.typicode.com/todos').then((res) => {
        return res.json();
      }),
    {
      onSuccess: (data) => {
        // manitaneのToastを表示
        showNotification({
          title: 'Default notification',
          message: 'Hey there, your code is awesome! 🤥',
        });
      },
      onError: (error) => {
        showNotification({
          title: 'error',
          message: 'Your request failed, please try again later',
        });
      },
    }
  );

  return { data, isLoading, isError };
};
