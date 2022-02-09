import { ECounterActionTypes } from "../types/redux/actionTypes";

export const incrementCounterAction = () => ({
  type: ECounterActionTypes.INCREMENT_COUNTER,
});
