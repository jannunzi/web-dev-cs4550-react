import logo from './logo.svg';

// import './vendors/bootstrap/css/bootstrap.min.css';
// import './vendors/bootstrap/bootstrap.min.css';
// import './vendors/fontawesome/css/all.min.css';

import './App.css';
import Labs from "./components/labs";
import Tuiter from "./components/tuiter";

import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import HelloWorld from "./components/hello-world";
import HomeScreen from "./components/tuiter/home-screen";
import ExploreScreen from "./components/tuiter/explore-screen";
import NotificationScreen from "./components/tuiter/notification-screen";
import UserList from "./components/user-list";
import SearchOmdb from "./screens/search-omdb";
import DetailsOmdb from "./screens/details-omdb";
import Nav from "./screens/nav";
import Signup from "./screens/signup";
import Profile from "./screens/profile";
import Signin from "./screens/signin";
import Pre from "./utils/pre";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/">
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="omdb" element={<SearchOmdb/>}/>
            <Route path="omdb/:searchString" element={<SearchOmdb/>}/>
            <Route path="omdb/details/:imdbID" element={<DetailsOmdb/>}/>
            <Route path="users"
                   element={<UserList/>}/>
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
