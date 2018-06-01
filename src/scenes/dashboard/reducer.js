const INITIAL_STATE = { items: [] };
import { API_CALL_REQUEST, API_CALL_SUCCESS } from "../../contants";

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case API_CALL_REQUEST:
      return { ...state };
      break;
    case API_CALL_SUCCESS:
      return { ...state, items: action.payload };
      break;
    default:
      return state;
  }
};
