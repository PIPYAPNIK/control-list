import { IListState } from "../types/redux/state";

const allItems = (state: IListState) => state.items.allIds;
const itemById = (state: IListState, id: number) => state.items.byId[id];
const counter = (state: IListState) => state.counter;

export const selectors = {
  allItems,
  itemById,
  counter,
};
