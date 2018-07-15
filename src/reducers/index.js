import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import customer from "../scenes/Adm/scenes/Customer/reducer";
import provider from "../scenes/Adm/scenes/Provider/reducer";

const rootReducer = combineReducers({
  form: formReducer,
  customer,
  provider
});

export default rootReducer;
