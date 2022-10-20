import React, { useState } from "react";

const Gender = {
  MALE: 0,
  FEMALE: 1,
  ALL: 2,
} as const;

type GenderType = typeof Gender[keyof typeof Gender];

const Sample16 = () => {
  const [gender, setGender] = useState<GenderType>(0);
  return (
    <div>
      <input
        type="radio"
        checked={gender === Gender.MALE}
        onChange={() => setGender(Gender.MALE)}
      />
      男性
      <input
        type="radio"
        checked={gender === Gender.FEMALE}
        onChange={() => setGender(Gender.FEMALE)}
      />
      女性
      <input
        type="radio"
        checked={gender === Gender.ALL}
        //   エラー
        onChange={() => setGender(Gender.ALL)}
      />
      全て
    </div>
  );
};

export default Sample16;
