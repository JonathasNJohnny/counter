import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(true);
  const [newInterval, setNewInterval] = useState(1000);

  const style = {
    backgroundColor: "#3b3b3b",
    width: "150px",
    height: "30px",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "600",
    border: "2px solid #2b2b2b",
    borderRadius: "5px",
  };

  useEffect(() => {
    if (running) {
      const newCounter = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, newInterval);

      return () => clearInterval(newCounter);
    }
  }, [running]);

  const handleStopStart = () => {
    if (running) {
      setRunning(false);
    } else {
      setRunning(true);
    }
  };

  return (
    <>
      <div style={style}>{count}</div>
      <button
        style={{ outline: "none", marginTop: "5px", width: "150px" }}
        onClick={() => handleStopStart()}
      >
        {running ? "STOP" : "START"}
      </button>
    </>
  );
};

export default Counter;
