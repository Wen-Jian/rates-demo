import { APPEND_LIST } from "./actionType";
const initialState = {
  data: {},
};

export default function counter(state = initialState, action) {
  switch (action.type) {
    case APPEND_LIST:
      const data = { ...state.data, ...action.payload };
      return { ...state, data };
    default:
      return state;
  }
}
