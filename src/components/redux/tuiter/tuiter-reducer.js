const TUITS = [
  {title: "Alice's 1st tuit", _id: "123"},
  {title: "Tuit XYZ", _id: "234"},
  {title: "Tuit RST", _id: "345"},
  {title: "Tuit 321", _id: "456"},
];

const INITIAL_STATE = {
  tuits: TUITS
}

const tuiterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CREATE_TUIT":
      return {
        tuits: [action.tuit, ...state.tuits]
      }
      break
    case "DELETE_TUIT":
      const newState = {
        tuits: state.tuits.filter(t => t !== action.tuit)
      }
      return newState;
      break
    case "UPDATE_TUIT":
      break
    default:
      return state;
  }
}

export default tuiterReducer;