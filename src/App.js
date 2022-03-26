import logo from './logo.svg';

// import './vendors/bootstrap/css/bootstrap.min.css';
// import './vendors/bootstrap/bootstrap.min.css';
// import './vendors/fontawesome/css/all.min.css';

import './App.css';
import Labs from "./components/labs";
import Tuiter from "./components/tuiter";

import {BrowserRouter, Route, Routes} from "react-router-dom";
import HelloWorld from "./components/hello-world";
import HomeScreen from "./components/tuiter/home-screen";
import ExploreScreen from "./components/tuiter/explore-screen";
import NotificationScreen from "./components/tuiter/notification-screen";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/">
            <Route path="labs"
                   element={<Labs/>}/>
            <Route path="hello"
                   element={<HelloWorld/>}/>
            <Route path="tuiter"
                   element={<Tuiter/>}>
              <Route index path="home"
                     element={<HomeScreen/>}/>
              <Route path="explore"
                     element={<ExploreScreen/>}/>
              <Route path="notifications"
                     element={<NotificationScreen/>}/>
            </Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
