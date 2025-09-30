import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store, increment, decrement, reset } from "../../store";


const CounterView = () => {
  const { value } = useSelector((s) => s.counter);
  const dispatch = useDispatch();
  return (
    <div className="text-sm text-gray-700 space-y-2">
      <div>Value: {value}</div>
      <div className="flex gap-2">
        <button
          className="px-3 py-1 rounded bg-black-500 text-white"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="px-3 py-1 rounded  bg-black-500 text-white"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          className="px-3 py-1 rounded bg-black-500 text-white"
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
        
      </div>
    </div>
  );
};
const ReduxToolkitExample = () => {
  return (
    <Provider store={store}>
      <CounterView />
    </Provider>
  );
};

export default ReduxToolkitExample;


