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
          {data.map(
            (todo: {
              id: React.Key | null | undefined;
              title:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | React.ReactFragment
                | React.ReactPortal
                | null
                | undefined;
            }) => (
              <div key={todo.id}>
                <li>{todo.title}</li>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default Sample19;
