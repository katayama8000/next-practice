import { useGetTodo } from '@hooks/useGetTodo';
import React from 'react';

const Sample19 = () => {
  const { data, isLoading, isError } = useGetTodo();
  return (
    <div>
      <h1>react-query</h1>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error!</div>}
      {data && (
        <div>
          {data?.map((todo: any) => (
            <div key={todo.id}>
              <li>{todo.title}</li>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sample19;
