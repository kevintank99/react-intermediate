import React, { useState } from "react";

const Counter = ({ initial }) => {
  const [count, setCount] = useState(initial);
  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-lg">{count}</span>
      <div className="flex gap-2">
        <button
          className="px-3 py-1 rounded text-white"
          onClick={() => setCount((c) => c + 1)}
        >
          Increment
        </button>
        <button
          className="px-3 py-1 rounded text-white "
          onClick={() => setCount((c) => c - 1)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

const StateAndPropsExample = () => {
  return (
    <div className="text-sm text-gray-700 space-y-2">
      <Counter initial={0} />
    </div>
  );
};

export default StateAndPropsExample;


