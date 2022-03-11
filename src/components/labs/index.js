import ReduxExamples from "./redux-examples";
import {Link} from "react-router-dom";
import Classes from "./classes";

const Labs = () => {
    return(
        <div>
            <h1>Labs</h1>
          <Link to="/hello">
            Hello
          </Link> |
          <Link to="/tuiter">
            Tuiter
          </Link>

          <ReduxExamples/>
          <Classes/>

        </div>
    )
}
export default Labs