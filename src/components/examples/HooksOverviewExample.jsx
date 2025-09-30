import React, {useMemo, useRef, useState } from "react";

const HooksOverviewExample = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef(null);


  const charCount = useMemo(() => value.length, [value]);

  return (
    <div className="text-sm text-gray-700 space-y-2">
      <div className="flex gap-2">
        <input
          ref={inputRef}
          className="border rounded px-2 py-1"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Type to trigger useEffect"
        />
        <button
          className="px-3 py-1 rounded  text-white "
          onClick={() => inputRef.current && inputRef.current.focus()}
        >
          Focus input
        </button>
      </div>
      <div className="flex items-center justify-between">
        <div>Value: {value}</div>
        <div className="text-xs text-gray-500">Chars: {charCount}</div>
      </div>
    </div>
  );
};

export default HooksOverviewExample;


