import {Link} from "react-router-dom";

const HelloWorld = () => {
    return(
        <div>
            <h1>Hello World!</h1>
          <Link to="/">
            Labs
          </Link> |
          <Link to="/tuiter">
            Tuiter
          </Link>

        </div>
    )
}
export default HelloWorld