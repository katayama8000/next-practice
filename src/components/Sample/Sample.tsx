import { Button } from '@mantine/core';
import React from 'react';
import { FC } from 'react';
import { TButton } from 'src/lib/TButton';

type Props = {
  child: string;
};
export const Sample: FC<Props> = ({ child }) => {
  return (
    <div>
      <div className="text-green-500">{child}</div>
      <Button className="m-3">Hello Button</Button>
      <Button className="m-3" color="cyan">
        Hello Button
      </Button>
      <TButton color="yellow">Hello Button</TButton>
    </div>
  );
};
