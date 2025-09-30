import React, { useState } from "react";

class HelloClass extends React.Component {
  constructor() {
    super();
    this.state = { clicks: 0 };
  }
  render() {
    return (
      <div className="flex items-center gap-2">
        <h4 className="text-black">Hello from class</h4>
        <button
          className="px-2 py-1 rounded bg-gray-200 hover:bg-gray-300"
          onClick={() => this.setState(({ clicks }) => ({ clicks: clicks + 1 }))}
        >
          Clicked {this.state.clicks}
        </button>
      </div>
    );
  }
}

function HelloFunc() {
  const [clicks, setClicks] = useState(0);
  return (
    <div className="flex items-center gap-2">
      <h4 className="text-black">Hello from function</h4>
      <button
        className="px-2 py-1 rounded text-white"
        onClick={() => setClicks((c) => c + 1)}
      >
        Clicked {clicks}
      </button>
    </div>
  );
}

const ClassVsFunctionExample = () => {
  return (
    <div className="space-y-2">
      <HelloClass />
      <HelloFunc />
    </div>
  );
};

export default ClassVsFunctionExample;


