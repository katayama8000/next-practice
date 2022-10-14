import React, { useReducer, useState } from "react";

type State = {
  id: number;
  text: string;
};

type AddAction = {
  type: "ADD";
  text: string;
};

type DeleteAction = {
  type: "DELETE";
  id: number;
};

type Action = AddAction | DeleteAction;

const initialState: State[] = [
  {
    id: 0,
    text: "initial todo",
  },
];

// stateとactionを受け取り、actionのtypeによってstateの更新方法を変える
const reducer = (state: State[], action: Action): State[] => {
  console.log(state, action, "reducer");
  console.log(state.slice(-1));
  switch (action.type) {
    case "ADD":
      return [...state, { id: state.slice(-1)[0].id + 1, text: action.text }];
    case "DELETE":
      if (state.length === 1) return state;
      return state.filter((todo) => todo.id !== action.id);
  }
};

const Sample9 = () => {
  const [text, setText] = useState("");
  const [todoList, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>useReducer</h1>
      <div>
        <label>
          todo :
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </label>
        <button onClick={() => dispatch({ type: "ADD", text: text })}>
          Add todo
        </button>
        <ul>
          {todoList.map((todo) => (
            <div key={todo.id}>
              <li>{todo.text}</li>
              <button onClick={() => dispatch({ type: "DELETE", id: todo.id })}>
                ✖
              </button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sample9;
