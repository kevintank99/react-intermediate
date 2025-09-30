import React, { useEffect, useMemo, useState } from "react";

const SearchInput = ({ value, onChange }) => {
  return (
    <input
      className="border rounded px-2 py-1 w-56 focus:outline-none focus:ring-2 text-black"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Filter..."
    />
  );
};

const data = ["React", "Vue", "Nodejs", "Angular", "ExpressJs"];
const Results = ({ filter }) => {
  const filtered = useMemo(
    () => data.filter((d) => d.toLowerCase().includes(filter.toLowerCase())),
    [filter]
  );
  return (
    <ul className="list-disc list-inside text-sm text-gray-700">
      {filtered.map((x) => (
        <li key={x}>{x}</li>
      ))}
    </ul>
  );
};

const LiftingStateExample = () => {
  const [query, setQuery] = useState("");
  const [debounced, setDebounced] = useState("");

  useEffect(() => {
    const t = setTimeout(() => setDebounced(query), 300);
    return () => clearTimeout(t);
  }, [query]);

  const stats = { length: debounced.length }

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <SearchInput value={query} onChange={setQuery} />
        <span className="text-xs text-gray-500">Chars: {stats.length}</span>
      </div>
      <Results filter={debounced} />
    </div>
  );
};

export default LiftingStateExample;


