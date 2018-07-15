export default (state = [], action) => {
  switch (action.type) {
    case "PROVIDER_SUCCESS":
      return action.payload;
    case "PROVIDER_ERROR":
      return action.payload;
    default:
      return state;
  }
};
