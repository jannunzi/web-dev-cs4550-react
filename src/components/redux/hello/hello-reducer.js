const INITIAL_STATE = {message: "Life's Good"};

const helloReducer = (state = INITIAL_STATE, action) => {
  // alert('life is awesome ' + action.type)
  // if(action.type === "LIFE_AWESOME") {
  //   return ({message: 'Life is Awesome!!!'})
  // }
  // return ({message: "Life's Good"});
  switch (action.type) {
    case "LIFE_AWESOME":
      return ({message: 'Life is Awesome!!!'});
    default:
      return state;
  }

}
export default helloReducer;