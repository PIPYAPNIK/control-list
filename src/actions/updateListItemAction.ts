import { EListActionTypes } from "../types/redux/actionTypes";

export const updateListItemAction = (payload: number) => ({
  type: EListActionTypes.UPDATE_LIST_ITEM,
  payload: payload,
});
