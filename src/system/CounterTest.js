import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./slice";

export function CounterTest() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <span>{count}</span>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </div>
  );
}
