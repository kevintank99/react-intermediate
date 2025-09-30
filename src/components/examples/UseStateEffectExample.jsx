import React, { useEffect, useState } from "react";

const UseStateEffectExample = () => {
  const [tick, setTick] = useState(0);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => setTick((t) => t + 1), 1000);
    return () => clearInterval(id);
  }, [running]);

  return (
    <div className="text-sm text-gray-700 space-y-2">
      <div>Seconds elapsed: {tick}</div>
      <div className="flex gap-2">
        <button
          className="px-3 py-1 rounded text-white"
          onClick={() => setRunning((v) => !v)}
        >
          {running ? "Pause" : "Resume"}
        </button>
        <button
          className="px-3 py-1 rounded text-white"
          onClick={() => setTick(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default UseStateEffectExample;


