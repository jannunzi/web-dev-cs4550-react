import {Link, useParams} from "react-router-dom";

const TuitDetails = ({tuits}) => {
  const {tid} = useParams();
  // const tuitId = params.tid;
  const tuit = tuits.find(t => t._id === tid);
  return(
    <div>
      <Link to="/tuits">
        Back
      </Link>
      <h1>Tuit Details {tid}</h1>
      <h2>{tuit.title}</h2>
    </div>
  )
}

export default TuitDetails