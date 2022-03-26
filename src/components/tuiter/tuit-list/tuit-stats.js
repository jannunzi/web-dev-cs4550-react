import React from "react";
import {useDispatch} from "react-redux";

const TuitStats = ({tuit}) => {
  const dispatch = useDispatch();
  const likeTuit = () => {
    dispatch({type: 'like-tuit', tuit});
  };

  return (
      <div className="row mt-2">
        <div className="col">
          <i className="far fa-message me-1"></i>
          {tuit.stats && tuit.stats.replies}
        </div>
        <div className="col">
          <i className="far fa-retweet me-1"></i>
          {tuit.stats && tuit.stats.retuits}
        </div>
        <div className="col">
          <span onClick={likeTuit}>
              {
                  tuit.liked &&
                  <i className="fas fa-heart me-1"
                     style={{color: 'red'}}></i>
              }
              {
                  !tuit.liked &&
                  <i className="far fa-heart me-1"></i>
              }
            {tuit.stats && tuit.stats.likes}
          </span>
        </div>
        <div className="col">
          <i className="far fa-inbox-out"></i>
        </div>
      </div>
    );
}
export default TuitStats;