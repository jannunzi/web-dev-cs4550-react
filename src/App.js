import logo from './logo.svg';
import './App.css';
import Labs from "./components/Labs";
import Tuiter from "./components/Tuiter";

import {BrowserRouter, Route, Routes} from "react-router-dom";
import HelloWorld from "./components/HelloWorld";

function App() {
  return (
<BrowserRouter>
  <div className="container">
    <Routes>
      <Route path="/hello"
             exact={true}
             element={<HelloWorld/>}/>
      <Route path="/"
             exact={true}
             element={<Labs/>}/>
      <Route path="/tuiter"
             exact={true}
             element={<Tuiter/>}/>
    </Routes>
  </div>
</BrowserRouter>
  );
}

export default App;
