import React, { useReducer } from "react";
import axios from "axios";

type stateType = {
  isLoading: boolean;
  isError: string;
  data: string;
};

type actionType = {
  type: "init" | "success" | "fail";
  payload: string;
};

const Sample10 = () => {
  const initialState = {
    isLoading: true,
    isError: "",
    data: "",
  };

  // reducerの関数を定義する。
  const reducerFunction = (state: stateType, action: actionType) => {
    console.log(state, action, "reducer");
    switch (action.type) {
      case "init":
        return initialState;
      case "success":
        return {
          isLoading: false,
          isError: "",
          data: action.payload,
        };
      case "fail":
        return {
          isLoading: false,
          isError: "エラーが発生しました。",
          data: "",
        };
      default:
        return state;
    }
  };

  const [dataState, dispatch] = useReducer(reducerFunction, initialState);

  const fetchData = () => {
    axios.defaults.headers.post["Content-Type"] =
      "application/json;charset=utf-8";
    axios.defaults.headers.post["Access-Control-Allow-Origin"] =
      "http://localhost:3000/";
    // githubのAPIを叩く。
    const url = "https://api.github.com/users/katayama8000";
    axios
      .get(url)
      .then((result) => {
        const data = result.data;
        console.log(data);
        dispatch({ type: "success", payload: data.login });
      })
      .catch((error) => {
        dispatch({ type: "fail", payload: "" });
      });
  };
  return (
    <div>
      <h1>fetch</h1>
      <button onClick={fetchData}>githubからデータを取得する</button>
      <p>{dataState.isLoading ? "Loading..." : "Finished!"}</p>
      <p>githubのユーザ名：{dataState.data}</p>
      <p>{dataState.isError ? dataState.isError : ""}</p>
    </div>
  );
};

export default Sample10;
