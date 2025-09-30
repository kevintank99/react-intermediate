import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";
import topics from "../data/topics";

const Home = () => {
  const [selectedId, setSelectedId] = useState(1);
  const selectedTopic = topics.find((t) => t.id === selectedId);

  return (
    <div className="flex">
      <Sidebar topics={topics} selectedId={selectedId} onSelect={setSelectedId} />
      <Content topic={selectedTopic} />
    </div>
  );
};

export default Home;