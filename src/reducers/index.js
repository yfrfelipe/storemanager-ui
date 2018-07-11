import { combineReducers } from "redux";
import dashboard from "../scenes/dashboard/reducer";
import { reducer as formReducer } from "redux-form";
import customer from "../scenes/Customer/reducer";


const rootReducer = combineReducers({
  form: formReducer,
  customer
});

export default rootReducer;
