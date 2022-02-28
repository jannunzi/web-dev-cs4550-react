const TuitItem = ({tuit, removeTuit}) => {
  return (
    <li className="list-group-item">
      {tuit.title}
      <button
        onClick={() => {removeTuit(tuit)}}
        className="btn btn-danger float-end">
        Delete
      </button>
    </li>
  );
};

export default TuitItem;