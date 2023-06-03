import type { ComponentProps } from 'react';

export const Input = (
  { onBlur, onChange, onFocus, value }: ComponentProps<'input'> // <- here
) => {
  return <input value={value} onChange={onChange} onBlur={onBlur} onFocus={onFocus} />;
};

export const Button = ({ children, onClick, type }: ComponentProps<'button'>) => {
  return (
    <button onClick={onClick} type={type}>
      {children}
    </button>
  );
};

const Sample24 = () => {
  return (
    <div>
      <Input
        value='sample'
        onChange={(e) => {
          return console.log(e.target.value);
        }}
      />
      <Button
        onClick={() => {
          console.log('button');
        }}
        type='button'
      >
        button
      </Button>
    </div>
  );
};

export default Sample24;
