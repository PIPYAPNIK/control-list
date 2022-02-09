import { incrementCounterAction, updateListItemAction } from "../../actions";

export enum EListActionTypes {
  UPDATE_LIST_ITEM = "UPDATE_LIST_ITEM",
}

export enum ECounterActionTypes {
  INCREMENT_COUNTER = "INCREMENT_COUNTER",
}

export type TReduxActions =
  | ReturnType<typeof updateListItemAction>
  | ReturnType<typeof incrementCounterAction>;
