import React, { memo, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementCounterAction } from "../../actions";
import { selectors } from "../../selectors";
import { IListState } from "../../types/redux/state";
interface IItemPrpos {
  id: number;
}

export const Item = memo<IItemPrpos>(({ id }) => {
  const isMount = useRef<boolean>(false);
  const dispatch = useDispatch();
  const item = useSelector((state: IListState) =>
    selectors.itemById(state, id)
  );

  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
    } else {
      dispatch(incrementCounterAction());
    }
  });

  return <p>Item count: {item.count}</p>;
});
