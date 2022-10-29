import { Profile } from '@component/Sample/Profile';
import React from 'react';

const Sample17 = () => {
  return (
    <div>
      <h1>見出しレベル1</h1>
      <Profile currentLevel={1} username="@neet" bio="私のプロフィール" />

      <h2>見出しレベル2</h2>
      <Profile currentLevel={2} username="@neet" bio="私のプロフィール" />
    </div>
  );
};

export default Sample17;
