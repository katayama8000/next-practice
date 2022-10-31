import { useEffect, useMemo, useState } from 'react';

const Hooks4 = () => {
  const [age, setAge] = useState<number>(0);
  const [name, setName] = useState<string>('');
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const person = useMemo(() => {
    return {
      age,
      name,
    };
  }, [age, name]);

  useEffect(() => {
    console.log(person);
  }, [person]);
  return (
    <div style={{ background: darkMode ? '#333' : '#fff' }}>
      Age:
      <input
        type='number'
        value={age}
        onChange={(e) => {
          return setAge(parseInt(e.target.value));
        }}
      />
      <br />
      Name:
      <input
        type='text'
        value={name}
        onChange={(e) => {
          return setName(e.target.value);
        }}
      />
      <br />
      DarkMode:
      <input
        type='checkbox'
        checked={darkMode}
        onChange={(e) => {
          return setDarkMode(e.target.checked);
        }}
      />
    </div>
  );
};

export default Hooks4;
