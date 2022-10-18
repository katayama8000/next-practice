import React, { useEffect, useState } from "react";

const Hooks5 = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  //   const [fullName, setFullName] = useState<string>("");

  const fullName = `${firstName} ${lastName}`;

  //   useEffect(() => {
  //     setFullName(`${firstName} ${lastName}`);
  //   }, [firstName, lastName]);
  return (
    <div>
      <input value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <h1>{fullName}</h1>
    </div>
  );
};

export default Hooks5;
