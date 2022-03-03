import {Link, useLocation} from "react-router-dom";

const Nav = () => {
  const {pathname} = useLocation();
  return(
    <div className="list-group">
      <Link to="/redux/tuiter"
            className={`
            ${pathname === '/redux/tuiter'?'active':''}
             list-group-item`}>Tuiter Redux</Link>
      <Link to="/redux/counter"
            className={`
            ${pathname === '/redux/counter'?'active':''}
             list-group-item`}>Counter Redux</Link>
      <Link to="/redux/hello"
            className={`
            ${pathname === '/redux/hello'?'active':''}
             list-group-item`}>Hello Redux</Link>

      <Link to="/login"
            className={`
            ${pathname === '/login'?'active':''}
             list-group-item`}>Login</Link>
      <Link to="/register"
            className={`
            ${pathname === '/register'?'active':''}
            list-group-item`}>Register</Link>
      <Link to="/tuits"
            className={`
            ${pathname === '/tuits'?'active':''}
            list-group-item`}>Tuits</Link>
      <Link to="/labs"
            className={`
            ${pathname === '/labs'?'active':''}
            list-group-item`}>Labs</Link>
    </div>
  )
}

export default Nav;