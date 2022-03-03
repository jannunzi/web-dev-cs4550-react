import {useDispatch, useSelector} from "react-redux";

const Counter = () => {
  const count = useSelector(state =>
    state.counter.count);
  const dispatch = useDispatch();
  const up = () => {
    dispatch({
      type:"COUNT_UP"
    })
  }
  const down = () => {
    dispatch({
      type:"COUNT_DOWN"
    })
  }
  return(
    <div>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button onClick={up}>UP</button>
      <button onClick={down}>DOWN</button>
    </div>
  )
}
export default Counter;