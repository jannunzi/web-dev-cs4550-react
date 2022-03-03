import TuitItem from "./TuitItem";

const TuitList = (
  {
    setNewTuitTitle,
    newTuitTitle,
    createTuit,
    deleteTuit,
    tuits
  }) => {
  return(
    <div>
      <h1>Tuit List</h1>
      <textarea
        onChange={(event) => {
          setNewTuitTitle(event.target.value)
        }}
        value={newTuitTitle}
        placeholder="What's happening?"
        className="form-control"></textarea>

      <button onClick={() => {createTuit()}}
              className="btn btn-primary rounded-pill">
        Tuit
      </button>
      <ul className="list-group">
        {
          tuits.map(tuit =>
            <TuitItem
              tuit={tuit}
              removeTuit={deleteTuit}/>
          )
        }
      </ul>
    </div>
  )
}
export default TuitList