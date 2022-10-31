import { useGetJson } from '@hooks/useGetJson';

const Sample2 = () => {
  const value = useGetJson(1);
  return (
    <>
      <h1>useSWR</h1>
      {value}
    </>
  );
};

export default Sample2;
