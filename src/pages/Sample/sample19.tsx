import { useGetTodo } from '@hooks/useGetTodo';

const Sample19 = () => {
  const { data, isError, isLoading } = useGetTodo();
  return (
    <div>
      <h1>react-query</h1>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error!</div>}
      {data && (
        <div>
          {data?.map((todo: any) => {
            return (
              <div key={todo.id}>
                <li>{todo.title}</li>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Sample19;
