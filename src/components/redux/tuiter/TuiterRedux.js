import {useDispatch, useSelector} from "react-redux";

const TuiterRedux = () => {
  const tuits = useSelector(state => state.tuiter.tuits)
  const dispatch = useDispatch();
  const deleteTuit = (tuit) => {
    dispatch({
      type: 'DELETE_TUIT',
      tuit: tuit
    })
  }
  return (
    <div>
      <h1>Tuiter Redux</h1>
      <ul>
        {
          tuits.map(tuit =>
          <li>
            {tuit.title}
            <button onClick={() => deleteTuit(tuit)}>Delete</button>
          </li>
          )
        }
      </ul>
      <button onClick={() => dispatch({
        type: "CREATE_TUIT",
        tuit: {title: "New Tuit", _id: (new Date()).getTime()+""}
      })}>Add</button>
    </div>
  )
}
export default TuiterRedux;