import React, { memo } from "react";
import { useSelector } from "react-redux";
import { selectors } from "../../selectors";

export const Counter = memo(() => {
  const counter = useSelector(selectors.counter);

  return <h2>Re-renders: {counter}</h2>;
});
