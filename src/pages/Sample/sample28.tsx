import { useEffect, useState } from 'react';

type User = {
  age: number;
  gender: '男' | '女';
  name: string;
};
const Sample28 = () => {
  const [user, setUser] = useState<User>({
    age: 20,
    gender: '男',
    name: '片山',
  });
  const add = () => {
    setUser({ ...user });
  };
  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <div>
      <h1>useEffect</h1>
      <button onClick={add}>add</button>
    </div>
  );
};

export default Sample28;
