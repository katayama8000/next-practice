import { showNotification } from '@mantine/notifications';
import { useQuery } from '@tanstack/react-query';

export const useGetTodo = () => {
  //react-queryのuseQueryを使ってデータを取得
  const { data, isError, isLoading } = useQuery(
    ['todo'],
    () => {
      return fetch('https://jsonplaceholder.typicode.com/todos').then((res) => {
        return res.json();
      });
    },
    {
      onError: () => {
        showNotification({
          message: 'Your request failed, please try again later',
          title: 'error',
        });
      },
      onSuccess: () => {
        // manitaneのToastを表示
        showNotification({
          message: 'Hey there, your code is awesome! 🤥',
          title: 'Default notification',
        });
      },
    }
  );

  return { data, isError, isLoading };
};
