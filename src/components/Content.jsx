import React from "react";
import TopicCard from "./TopicCard";

const Content = ({ topic }) => {
  return (
    <div className="w-3/4 p-6 overflow-y-auto h-screen">
        <TopicCard topic={topic} />
    </div>
  );
};

export default Content;
