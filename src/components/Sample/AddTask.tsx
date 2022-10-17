import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { addTitleState, addTitleStateLength } from "src/states/addTitleState";
import { Tasks } from "src/types/tasks";

export const AddTask = () => {
  const addTitle = useRecoilValue(addTitleState);
  const addTitleLength = useRecoilValue(addTitleStateLength);

  return (
    <div className="taskField">
      <div>{addTitleLength}個のタスクがあります</div>
      <ul>
        {addTitle.map((task: Tasks) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};
