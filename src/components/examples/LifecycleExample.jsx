import React, { useEffect, useState } from "react";

const LifecycleChild = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return <div>Child mounted. Window width: {width}px</div>;
};

const LifecycleExample = () => {
  const [visible, setVisible] = useState(true);
  return (
    <div className="text-sm text-gray-700 space-y-2">
      <button
        className="px-3 py-1 rounded text-white"
        onClick={() => setVisible((v) => !v)}
      >
        {visible ? "Unmount child" : "Mount child"}
      </button>
      <div className="p-2 bg-gray-50 rounded border">
        {visible ? <LifecycleChild /> : <em>Child unmounted</em>}
      </div>
    </div>
  );
};

export default LifecycleExample;


