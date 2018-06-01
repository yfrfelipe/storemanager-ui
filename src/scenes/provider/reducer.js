const INITIAL_STATE = { items: [] };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOAD_SUCCESS":
      return { ...state, items: action.payload };
    default:
      return state;
  }
};
