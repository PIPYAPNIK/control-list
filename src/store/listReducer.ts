import { EListActionTypes } from "../types/redux/actionTypes";

const initState: any = {
  items: Array.from(Array(10).keys()).reduce((acc, value) => {
    return {
      ...acc,
      [value + 1]: {
        id: value + 1,
        count: 0,
      },
    };
  }, {}),
  counter: 0,
};

const listReducer = (state = initState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case EListActionTypes.UPDATE_LIST_ITEM:
      return {
        ...state,
        items: {
          ...state.items,
          [payload]: {
            ...state.items[payload],
            count: state.items[payload].count + 1,
          },
        },
      };
    default:
      return state;
  }
};

export default listReducer;
