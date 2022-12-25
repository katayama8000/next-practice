import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

const FormPage = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [isExistFormContent, setIsExistFormContent] = useState<boolean>(false);
  const router = useRouter();

  const pageChangeHandler = useCallback(() => {
    if (isExistFormContent) {
      const answer = window.confirm('本当にページ遷移しますか？');
      if (!answer) {
        throw 'Abort route';
      }
    }
  }, [isExistFormContent]);

  useEffect(() => {
    router.events.on('routeChangeStart', pageChangeHandler);
    return () => {
      router.events.off('routeChangeStart', pageChangeHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageChangeHandler]);

  useEffect(() => {
    setIsExistFormContent(name !== '' && email !== '' ? true : false);
  }, [name, email]);

  return (
    <form>
      <label>
        名前:
        <input
          type='text'
          name='name'
          value={name}
          onChange={(e) => {
            return setName(e.target.value);
          }}
        />
      </label>
      <br />
      <label>
        メールアドレス:
        <input
          type='email'
          name='email'
          value={email}
          onChange={(e) => {
            return setEmail(e.target.value);
          }}
        />
      </label>
      <br />
      <input type='submit' value='送信' />
      <button
        onClick={() => {
          console.log(name, email);
        }}
      >
        check
      </button>
    </form>
  );
};

export default FormPage;
