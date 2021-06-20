import { combineReducers } from "redux";
import listReducer from "./listStore/reducer";

export default combineReducers({
  list: listReducer,
});
