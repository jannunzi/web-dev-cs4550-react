import TuitItem from "./TuitItem";
import {useState} from 'react';

const TUITS = [
  {title: "Tuit ABC"},
  {title: "Tuit XYZ"},
  {title: "Tuit RST"},
  {title: "Tuit 321"},
]

const TuitList = () => {
  const [tuits, setTuits] = useState(TUITS);
  const [newTuitTitle, setNewTuitTitle] = useState("Brand New Tuit");
  const title = "List of Tuits";

  const createTuit = () => {
    const newTuit = {
      title: newTuitTitle
    };
    const newTuits = [newTuit, ...tuits];
    setTuits(newTuits);
  }

  const deleteTuit = (tuitToDelete) => {
    // alert('delete tuit')
    const newTuits = tuits.filter(tuit => {
      if (tuit === tuitToDelete) {
        return false;
      } else {
        return true;
      }
    });
    setTuits(newTuits)
  }

  return(
    <div className="container">
      <h1>{title}</h1>

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
  );
};

export default TuitList;