import {Link} from "react-router-dom";

const Nav = () => {
  return(
    <div className="list-group">
      <Link to="omdb" className="list-group-item">
        Omdb
      </Link>
    </div>
  )
}
export default Nav;