const INITIAL_STATE = {
  count: 20
}

const counterReducer = (
  state = INITIAL_STATE,
  action) => {
  switch (action.type) {
    case "COUNT_UP":
      return {
        count: state.count + 1
      }
      break;
    case "COUNT_DOWN":
      return {
        count: state.count - 1
      }
      break;
    default:
      return state;
  }
}
export default counterReducer;