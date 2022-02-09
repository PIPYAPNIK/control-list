import { IListItem } from "../listItem";

interface IItems {
  byId: Record<number, IListItem>;
  allIds: number[];
}

export interface IListState {
  items: IItems;
  counter: number;
}
