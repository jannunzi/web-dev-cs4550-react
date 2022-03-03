import TuitItem from "./TuitItem";
import {useState} from 'react';
import Login from "./Login";
import Register from "./Register";
import TuitList from "./TuitList";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Add from "./Add";
import TuitDetails from "./TuitDetails";
import Nav from "./Nav";
import Labs from "./Labs";
import HelloRedux from "./redux/hello/HelloRedux";
import helloReducer from "./redux/hello/hello-reducer";
import counterReducer from "./redux/counter/counter-reducer";
import {createStore, combineReducers} from "redux";
import {Provider} from "react-redux";
import Counter from "./redux/counter/Counter";
import TuiterRedux from "./redux/tuiter/TuiterRedux";
import tuiterReducer from "./redux/tuiter/tuiter-reducer";

// const store = createStore(helloReducer);

const reducer = combineReducers({
  hello: helloReducer,
  counter: counterReducer,
  tuiter: tuiterReducer
});

const store = createStore(reducer)

const TUITS = [
  {title: "Tuit ABC", _id: "123"},
  {title: "Tuit XYZ", _id: "234"},
  {title: "Tuit RST", _id: "345"},
  {title: "Tuit 321", _id: "456"},
]

const TuitApp = () => {

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

  const myStyle = {
    backgroundColor: "yellow"
  }

  return(
    <Provider store={store}>
    <div className="container mt-4">
      <h1 style={myStyle}>Tuit App</h1>
      <BrowserRouter>

        <div className="row">
          <div className="col-3">
            <Nav/>
          </div>
          <div className="col-9">
        <Routes>
          <Route path="/redux/tuiter" element={<TuiterRedux/>}/>
          <Route path="/redux/counter" element={<Counter/>}/>
          <Route path="/redux/hello" element={<HelloRedux/>}/>
          <Route path="/add/:a/:b" element={<Add/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/labs" element={<Labs/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/tuits/:tid" element={
            <TuitDetails tuits={tuits}/>}/>
          <Route path="/tuits" element={
            <TuitList setNewTuitTitle={setNewTuitTitle} newTuitTitle={newTuitTitle}
            deleteTuit={deleteTuit} createTuit={createTuit} tuits={tuits}/>}/>
        </Routes>
          </div>
        </div>
        <Counter/>
      </BrowserRouter>

    </div>
    </Provider>
  );
};

export default TuitApp;