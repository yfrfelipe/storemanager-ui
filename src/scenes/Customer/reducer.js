const INITIAL_STATE = { items: [] };

const customer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CUSTOMER_SUCCESS":
      return { ...state, items: action.payload };
    default:
      return state;
  }
};

export default customer