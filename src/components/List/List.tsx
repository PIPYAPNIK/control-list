import React, { memo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateListItemAction } from "../../actions";
import { selectors } from "../../selectors";
import { Counter } from "../Counter";
import { Item } from "../Item";

export const List = memo(() => {
  const dispatch = useDispatch();
  const itemsIds = useSelector(selectors.allItems);

  const handleUpdateItem = useCallback(() => {
    const randomId = itemsIds[Math.floor(Math.random() * itemsIds.length)];

    dispatch(updateListItemAction(randomId));
  }, [dispatch, itemsIds]);

  return (
    <>
      {itemsIds.map((id) => {
        return <Item key={id} id={id} />;
      })}
      <Counter />
      <button onClick={handleUpdateItem}>Update</button>
    </>
  );
});
