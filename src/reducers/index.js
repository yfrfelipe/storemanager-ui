import { combineReducers } from "redux";
import dashboard from "../scenes/dashboard/reducer";
const rootReducer = combineReducers({
  localidade: dashboard
});

export default rootReducer;
