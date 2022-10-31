import { useRef } from 'react';

const Hooks1 = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  // const [email, setEmail] = useState<string>("");
  // const [password, setPassword] = useState<string>("");

  console.log('reRender');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(emailRef.current?.value, passwordRef.current?.value);
  };
  return (
    <div>
      <h1>Hooks1</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor='email'>Email : </label>
        <input
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
          ref={emailRef}
          type='email'
          id='email'
        />
        <br />
        <label htmlFor='password'>Password : </label>
        <input
          // value={password}
          // onChange={(e) => setPassword(e.target.value)}
          ref={passwordRef}
          type='password'
          id='password'
        />
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Hooks1;
