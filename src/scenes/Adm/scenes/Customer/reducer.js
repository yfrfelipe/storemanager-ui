export default (state = [], action) => {
  switch (action.type) {
    case "CUSTOMER_SUCCESS":
      return action.payload;
    case "CUSTOMER_ERROR":
      return action.payload;
    default:
      return state;
  }
};
