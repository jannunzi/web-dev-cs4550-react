import {Link} from "react-router-dom";

const Tuiter = () => {
    return(
        <div>
            <h1>Tuiter</h1>
          <Link to="/hello">
            Hello
          </Link> |
          <Link to="/">
            Labs
          </Link>

        </div>
    )
}
export default Tuiter