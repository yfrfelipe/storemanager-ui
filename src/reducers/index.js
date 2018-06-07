import { combineReducers } from "redux";
import dashboard from "../scenes/dashboard/reducer";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  form: formReducer
});

export default rootReducer;
