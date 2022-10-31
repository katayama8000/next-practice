import { Button } from '@mantine/core';
import axios from 'axios';
import { useReducer } from 'react';

type actionType = {
  payload: string;
  type: 'init' | 'success' | 'fail';
};

const Sample10 = () => {
  const initialState = {
    data: '',
    isError: false,
    isLoading: true,
  };

  type stateType = typeof initialState;

  // reducerの関数を定義する。
  const reducerFunction = (state: stateType, action: actionType) => {
    console.log(state, action, 'reducer');
    switch (action.type) {
      case 'init':
        return initialState;
      case 'success':
        return {
          data: action.payload,
          isError: false,
          isLoading: false,
        };
      case 'fail':
        return {
          data: '',
          isError: true,
          isLoading: false,
        };
      default:
        return state;
    }
  };

  const [dataState, dispatch] = useReducer(reducerFunction, initialState);

  const fetchData = () => {
    axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = 'http://localhost:3000/';
    // githubのAPIを叩く。
    const url = 'https://api.github.com/users/katayama8000';
    axios
      .get(url)
      .then((result) => {
        const data = result.data;
        dispatch({ payload: data.login, type: 'success' });
      })
      .catch(() => {
        dispatch({ payload: '', type: 'fail' });
      });
  };
  return (
    <div>
      <h1>fetch</h1>
      <Button onClick={fetchData} color='pink'>
        githubからデータを取得する
      </Button>
      <p>{dataState.isLoading ? 'Loading...' : 'Finished!'}</p>
      <p>githubのユーザ名：{dataState.data}</p>
      <p>{dataState.isError ? 'error' : 'success'}</p>
    </div>
  );
};

export default Sample10;
