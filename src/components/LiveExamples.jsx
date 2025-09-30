import React from "react";
import examplesById from "./examples";

const LiveExamples = ({ topicId }) => {
  const Example = examplesById[topicId] 
  return (
    <div className="mt-4 rounded-lg p-4 bg-gradient-to-br from-gray-50 to-white border shadow-sm">
      <div className="rounded-md border bg-white/70 p-3">
        <Example />
      </div>
    </div>
  );
};

export default LiveExamples;


