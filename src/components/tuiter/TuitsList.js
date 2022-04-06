import axios from "axios";
import {useEffect, useState} from "react";
import * as tuitsService from "../../services/tuits-service"
const TuitsList = () => {
  const [tuits, setTuits] = useState([]);
  const [tuit, setTuit] = useState({tuit: 'New tuit'})
  const findAllTuits = async () => {
    const tuits = await tuitsService.findAllTuits();
    setTuits(tuits);
  }
  const deleteTuit = async (tuit) => {
    // alert(tuit.tuit)
    const tuits = await tuitsService.deleteTuit(tuit._id);
    setTuits(tuits);
  }
  const createTuit = async () => {
    const tuits = await tuitsService.createTuit(tuit);
    setTuits(tuits);
  }
  const likeTuit = async (tuit) => {
    const tuits = await tuitsService.likeTuit(tuit._id);
    setTuits(tuits);
  }
  const unlikeTuit = async (tuit) => {
    const tuits = await tuitsService.unlikeTuit(tuit._id);
    setTuits(tuits);
  }
  const updateTuit = async (tuit) => {
    const tuits = await tuitsService.updateTuit(tuit._id, tuit);
    setTuits(tuits);
  }
  useEffect(findAllTuits, []);
  return(
    <div>
      <h2>Tuit List {tuits.length}</h2>
      <ul>
        <li>
          <input onChange={(e) => {
            setTuit({...tuit, tuit: e.target.value})
          }}/>
          <button onClick={createTuit}>Tuit</button>
        </li>
        {
          tuits.map(tuit =>
          <li>
            {tuit.tuit} {tuit.likes}
            <button onClick={() => updateTuit({...tuit, likes: tuit.likes + 1})}>Like2</button>
            <button onClick={() => updateTuit({...tuit, likes: tuit.likes - 1})}>UnLike2</button>
            <button onClick={() => {likeTuit(tuit)}}>Like</button>
            <button onClick={() => {unlikeTuit(tuit)}}>Unlike</button>
            <button onClick={() => {deleteTuit(tuit)}}>Delete</button>
          </li>
          )
        }
      </ul>
    </div>
  )
}
export default TuitsList;