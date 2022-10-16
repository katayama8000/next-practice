import React, { useReducer } from "react";
import axios from "axios";
import { Button } from "@mantine/core";

type actionType = {
  type: "init" | "success" | "fail";
  payload: string;
};

const Sample10 = () => {
  const initialState = {
    isLoading: true,
    isError: false,
    data: "",
  };

  type stateType = typeof initialState;

  // reducerの関数を定義する。
  const reducerFunction = (state: stateType, action: actionType) => {
    console.log(state, action, "reducer");
    switch (action.type) {
      case "init":
        return initialState;
      case "success":
        return {
          isLoading: false,
          isError: false,
          data: action.payload,
        };
      case "fail":
        return {
          isLoading: false,
          isError: true,
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
        dispatch({ type: "success", payload: data.login });
      })
      .catch((error) => {
        dispatch({ type: "fail", payload: "" });
      });
  };
  return (
    <div>
      <h1>fetch</h1>
      <Button onClick={fetchData} color="pink">
        githubからデータを取得する
      </Button>
      <p>{dataState.isLoading ? "Loading..." : "Finished!"}</p>
      <p>githubのユーザ名：{dataState.data}</p>
      <p>{dataState.isError ? "error" : "success"}</p>
    </div>
  );
};

export default Sample10;
