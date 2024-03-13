import { NextPage } from 'next';
import { FC, useState } from 'react';

const useHook = () => {
  const [state, setState] = useState<number>(0);
  return { state, setState };
};

const UIComponent: FC = () => {
  const { state, setState } = useHook();
  return (
    <div>
      <p>{state}</p>
      <button onClick={() => setState((prev) => prev + 1)}>increment</button>
    </div>
  );
};

const Index: NextPage = () => {
  const { state, setState } = useHook();
  return (
    <div>
      <p>{state}</p>
      <button onClick={() => setState((prev) => prev + 1)}>increment</button>
      <UIComponent />
    </div>
  );
};

export default Index;
