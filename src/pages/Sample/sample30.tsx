import axios from 'axios';
import type { FC } from 'react';
import { useEffect, useState } from 'react';


interface Response {
  success: boolean;
}

const Sample30: FC = () => {
  const [getResponse, setGetResponse] = useState<string | null>(null);
  const [postResponse, setPostResponse] = useState<Response | null>(null);

  // useEffect を使用して初回レンダリング時に GET リクエストを行います
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:3000/');
        setGetResponse(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  const handlePostSubmit = async () => {
    const expoPushToken = 'ExponentPushToken[b5nR6zALafV431QtOC7byo]';
    try {
      const response = await axios.post('http://127.0.0.1:3000/submit', {
        body: 'test-from-nextjs',
        expo_push_token: expoPushToken,
        title: 'test-from-nextjs',
      });

      setPostResponse(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>GET Request Response:</h1>
      <p>{getResponse}</p>

      <h1>POST Request Response:</h1>
      {postResponse && <p>{JSON.stringify(postResponse)}</p>}
      <br />
      <button onClick={handlePostSubmit}>Submit POST</button>
    </div>
  );
};

export default Sample30;
