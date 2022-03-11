import logo from './logo.svg';

// import './vendors/bootstrap/css/bootstrap.min.css';
// import './vendors/bootstrap/bootstrap.min.css';
// import './vendors/fontawesome/css/all.min.css';

import './App.css';
import Labs from "./components/labs";
import Tuiter from "./components/tuiter";

import {BrowserRouter, Route, Routes} from "react-router-dom";
import HelloWorld from "./components/hello-world";

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
