import React, { memo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateListItemAction } from "../../actions";
import { selectors } from "../../selectors";
import { IListItem } from "../../types/listItem";
import { Item } from "../Item";

export const List = memo(() => {
  const dispatch = useDispatch();
  const items = useSelector(selectors.itemsList);
  const counter = useSelector(selectors.counter);
  const itemsArray: IListItem[] = Object.values(items);

  const handleUpdateItem = useCallback(() => {
    const randomItem =
      itemsArray[Math.floor(Math.random() * itemsArray.length)];

    dispatch(updateListItemAction(randomItem.id));
  }, []);

  return (
    <>
      {itemsArray.map((el) => {
        return <Item key={el.id} count={el.count} />;
      })}
      <button onClick={handleUpdateItem}>Update</button>
      <h2>Total rerendars {counter}</h2>
    </>
  );
});
