import type { Sugar } from '@sugarform/core';
import { useSugarForm } from '@sugarform/core';

type YourBeautifulLover =
  | {
      gender: 'male';
      income: number;
    }
  | {
      age: number;
      gender: 'female';
    };

type YourProfile = {
  firstHope: YourBeautifulLover;
  secondHope: YourBeautifulLover;
  thirdHope: YourBeautifulLover;
};

// const defaultValue: Thuman = {
//   age: 0,
//   gender: 'male',
//   name: 'john',
// };

export const Profile = ({ sugar }: { sugar: Sugar<YourProfile> }) => {
  const { fields } = sugar.mapleObject();

  return (
    // 各コンポーネントにアタッチ
    <>
      <Lover sugar={fields.firstHope} />
      <Lover sugar={fields.secondHope} />
      <Lover sugar={fields.thirdHope} />
    </>
  );
};

export const Lover = ({ sugar }: { sugar: Sugar<YourBeautifulLover> }) => {
  //   const { fields } = sugar.maple<{
  //     age: number;
  //     gender: 'male' | 'female';
  //     income: number;
  //   }>({
  //     reshape: {
  //       transform: ({ age, gender, income }) => {
  //         return gender === 'male' ? { gender, income } : { age, gender };
  //       },
  //     },
  //   });

  console.log(sugar);

  return (
    <>
      <div>fields.gender fields.age fields.income</div>
    </>
  );
};

// ------------------------------

type Thuman = {
  age: number;
  gender: 'male' | 'female';
  name: string;
};

const defaultValue: Thuman = {
  age: 0,
  gender: 'female',
  name: 'john',
};

const Sample22 = () => {
  const { sugar, useIsDirtyState } = useSugarForm<Thuman>({
    defaultValue: defaultValue,
  });

  console.log(sugar);
  sugar.asMounted((s) => {
    s.setTemplate({
      age: 0,
      gender: 'male',
      name: 'john',
    });
  });

  const isDirty = useIsDirtyState();
  console.log(isDirty);
  //   const rendered = render();
  //   console.log(rendered);

  return <div>sample22</div>;
};

export default Sample22;
