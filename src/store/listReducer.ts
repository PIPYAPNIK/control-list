import {
  ECounterActionTypes,
  EListActionTypes,
  TReduxActions,
} from "../types/redux/actionTypes";
import { IListState } from "../types/redux/state";

const initState: IListState = {
  items: {
    byId: Array.from(Array(10).keys()).reduce((acc, value) => {
      return {
        ...acc,
        [value + 1]: {
          id: value + 1,
          count: 0,
        },
      };
    }, {}),
    allIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  counter: 0,
};

const listReducer = (state = initState, action: TReduxActions) => {
  const { type } = action;

  switch (type) {
    case EListActionTypes.UPDATE_LIST_ITEM:
      const { payload } = action;
      return {
        ...state,
        items: {
          ...state.items,
          byId: {
            ...state.items.byId,
            [payload]: {
              ...state.items.byId[payload],
              count: state.items.byId[payload].count + 1,
            },
          },
        },
      };
    case ECounterActionTypes.INCREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter + 1,
      };
    default:
      return state;
  }
};

export default listReducer;
