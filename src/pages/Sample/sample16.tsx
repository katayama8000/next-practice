import React, { useState } from "react";

enum Gender {
  male = 0,
  female = 1,
  all = 2,
}
const Sample16 = () => {
  const [gender, setGender] = useState<number>(0);
  return (
    <div>
      <input
        type="radio"
        checked={gender === 0}
        onChange={() => setGender(0)}
      />
      男性
      <input
        type="radio"
        checked={gender === 1}
        onChange={() => setGender(1)}
      />
      女性
      <input
        type="radio"
        checked={gender === 2}
        onChange={() => setGender(2)}
      />
      全て
    </div>
  );
};

export default Sample16;
