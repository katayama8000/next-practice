import React, { useEffect } from "react";

const Hooks4 = () => {
  const [age, setAge] = React.useState<number>(0);
  const [name, setName] = React.useState<string>("");
  const [darkMode, setDarkMode] = React.useState<boolean>(false);

  const person = React.useMemo(() => {
    return {
      age,
      name,
    };
  }, [age, name]);

  useEffect(() => {
    console.log(person);
  }, [person]);
  return (
    <div style={{ background: darkMode ? "#333" : "#fff" }}>
      Age:
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(parseInt(e.target.value))}
      />
      <br />
      Name:
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      DarkMode:
      <input
        type="checkbox"
        checked={darkMode}
        onChange={(e) => setDarkMode(e.target.checked)}
      />
    </div>
  );
};

export default Hooks4;
