import React from "react";

const Sidebar = ({ topics, selectedId, onSelect }) => {
  return (
    <div className="w-1/4 bg-white dark:bg-black h-screen p-4 border-r border-gray-300 dark:border-gray-700 overflow-y-auto custom-scrollbar">
    <h2 className="text-lg font-semibold mb-4 text-black dark:text-white">React Topics</h2>
    <ul>
      {topics.map((topic) => (
        <li
          key={topic.id}
          className={`p-2 mb-2 rounded cursor-pointer transition-colors duration-200 ${
            selectedId === topic.id
              ? "bg-white text-black" // selected
              : "hover:bg-white hover:text-black" // hover = black background, white text
          }`}
          onClick={() => onSelect(topic.id)}
        >
          {topic.title}
        </li>
      ))}
    </ul>
  </div>
  
  
  );
};

export default Sidebar;
