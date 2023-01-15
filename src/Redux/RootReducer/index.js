import { combineReducers } from "redux";
import homeSlice from "Redux/Actions/Home/general";

const rootReducer = combineReducers({
  home: homeSlice,
});

export default rootReducer;
