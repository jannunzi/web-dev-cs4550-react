import {useDispatch, useSelector} from "react-redux";

const HelloRedux = () => {
  const message =
    useSelector((state) => {
      return state.hello.message;
    })
  const dispatch = useDispatch();
  return(
    <div>
      <h1>
        Hello World
      </h1>
      <h2>
        {message}
      </h2>
      <button onClick={() => {
        dispatch({
          type: 'LIFE_AWESOME'
        });
      }}>
        Awesome!!
      </button>
    </div>
  )
}
export default HelloRedux