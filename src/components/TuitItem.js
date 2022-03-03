import {Link} from "react-router-dom";

const TuitItem = ({tuit, removeTuit}) => {
  return (
    <li className="list-group-item">
      <Link to={`/tuits/${tuit._id}`}>
        {tuit.title}
      </Link>
      <button
        onClick={() => {removeTuit(tuit)}}
        className="btn btn-danger float-end">
        Delete
      </button>
    </li>
  );
};

export default TuitItem;