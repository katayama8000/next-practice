import type { ComponentProps } from 'react';

type InputProps = ComponentProps<'input'>; // <- here

export const Input = ({ onBlur, onChange, onFocus, value }: InputProps) => {
  return <input value={value} onChange={onChange} onBlur={onBlur} onFocus={onFocus} />;
};

type ButtonProps = ComponentProps<'button'>; // <- here

export const Button = ({ children, onClick, type }: ButtonProps) => {
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
