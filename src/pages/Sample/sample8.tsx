import { Timer } from "@component/Sample/Timer";
import React, { useState } from "react";

const Sample8 = () => {
  const [isDisplay, setIsDisplay] = useState(true);
  const handleToggleDisplay = () => {
    setIsDisplay(!isDisplay);
  };

  return (
    <div>
      <span>
        コンポーネントを
        <button onClick={handleToggleDisplay}>
          {isDisplay ? "Unmount" : "Mount"}
        </button>
      </span>
      {isDisplay && <Timer setIsDisplay={setIsDisplay} />}
    </div>
  );
};

export default Sample8;
