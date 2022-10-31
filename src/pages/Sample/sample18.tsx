import { useQuery } from '@tanstack/react-query';

const Sample18 = () => {
  // jsonplaceholderからデータをreact-queryで取得
  const { data, isError, isLoading } = useQuery(['todo'], () => {
    return fetch('https://jsonplaceholder.typicode.com/todos').then((res) => {
      return res.json();
    });
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error!</div>;
  }

  if (data) {
    return (
      <div>
        {data.map(
          (todo: {
            id: React.Key | null | undefined;
            title:
              | string
              | number
              | boolean
              | React.ReactElement<any, string | React.JSXElementConstructor<any>>
              | React.ReactFragment
              | React.ReactPortal
              | null
              | undefined;
          }) => {
            return (
              <div key={todo.id}>
                <li>{todo.title}</li>
              </div>
            );
          }
        )}
      </div>
    );
  }
};

export default Sample18;
