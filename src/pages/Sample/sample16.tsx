import { useState } from 'react';

const Gender = {
  ALL: 2,
  FEMALE: 1,
  MALE: 0,
} as const;

type GenderType = (typeof Gender)[keyof typeof Gender];

const Sample16 = () => {
  const [gender, setGender] = useState<GenderType>(0);
  return (
    <div>
      <input
        type='radio'
        checked={gender === Gender.MALE}
        onChange={() => {
          return setGender(Gender.MALE);
        }}
      />
      男性
      <input
        type='radio'
        checked={gender === Gender.FEMALE}
        onChange={() => {
          return setGender(Gender.FEMALE);
        }}
      />
      女性
      <input
        type='radio'
        checked={gender === Gender.ALL}
        //   エラー
        onChange={() => {
          return setGender(Gender.ALL);
        }}
      />
      全て
    </div>
  );
};

export default Sample16;
