// import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { decrement, increment } from "../redux/slice/counterSlice";
import { RootState } from "../redux/store";
export default function Home() {
  const count = useSelector(
    (state: RootState) => state.counter.value
  );
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(decrement())}>+</button>
      <span>{count}</span>
      <button onClick={() => dispatch(increment())}>-</button>
    </div>
  );
}

// { counter: { value: number } }