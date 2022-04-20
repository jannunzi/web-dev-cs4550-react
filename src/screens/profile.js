import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import {useProfile} from "../contexts/profile-context";
import {findCommentsByUserId} from "../services/movie-service";

const api = axios.create({
  withCredentials: true
});

const Profile = () => {
  const navigate = useNavigate()
  const {profile, signout} = useProfile()
  const [comments, setComments] = useState([])
  
  const logout = async () => {
    try {
      await signout()
    } catch (e) {
      
    }
    navigate('/signin')
  }

  const findMyComments = async () => {
    const comments = await findCommentsByUserId(profile._id)
    setComments(comments)
  }

  useEffect(() => {
    findMyComments()
  }, [])
  
  return (
    <div>
      <h1>Profile</h1>
      <button
        onClick={logout}
        className="btn btn-danger">
        Logout
      </button>
      {profile && profile.email}
      <Link to="/omdb">
        Search movies
      </Link>

      {JSON.stringify(comments)}

      <ul className="list-group">
        {
          comments && comments.map(comment =>
          <li className="list-group-item">
            <Link to={`/omdb/details/${comment.imdbID}`}>
              {comment && comment.comment}
              {comment.imdbID}
            </Link>
          </li>
          )
        }
      </ul>
    </div>
  );
};

export default Profile;