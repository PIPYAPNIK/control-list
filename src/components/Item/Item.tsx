import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateListCounterAction } from "../../actions/updateListCounterAction";

interface IItemPrpos {
  count: number;
}

export const Item = memo<IItemPrpos>(({ count }) => {
  const dispatch = useDispatch();

  return <p>Item count: {count}</p>;
});
