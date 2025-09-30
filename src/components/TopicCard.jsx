import React from "react";
import LiveExamples from "./LiveExamples";

const TopicCard = ({ topic }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-2 text-black">{topic.title}</h2>
      <div className="mt-4">
        <LiveExamples topicId={topic.id} />
      </div>
    </div>
  );
};

export default TopicCard;
