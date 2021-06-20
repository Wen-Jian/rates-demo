import { APPEND_LIST } from "./actionType";
export const appendData = (data) => {
  return {
    type: APPEND_LIST,
    payload: data,
  };
};
