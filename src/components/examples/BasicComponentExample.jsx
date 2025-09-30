import React, { useState } from "react";

const Greeting = ({ name }) => {
  const label = name.trim() ? `Hello, ${name}!` : "Hello!"
  return <h3 className="font-semibold text-gray-800">{label}</h3>;
};

const BasicComponentExample = () => {
  const [name, setName] = useState("");
  const [caps, setCaps] = useState(false);

  const display = caps ? name.toUpperCase() : name;

  return (
    <div className="text-sm text-gray-700 space-y-3">
      <div className="flex items-center gap-2">
        <input
          className="border rounded px-2 py-1 w-48 focus:outline-none focus:ring-2"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className="inline-flex items-center gap-2 text-gray-600">
          <input type="checkbox" checked={caps} onChange={(e) => setCaps(e.target.checked)} />
          Uppercase
        </label>
      </div>
      <Greeting name={display} />
    </div>
  );
};

export default BasicComponentExample;


