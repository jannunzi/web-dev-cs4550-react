import React, {useEffect, useRef, useState} from 'react';
import {useParams} from "react-router-dom";
import Pre from "../utils/pre";
import axios from "axios";
import SecureContent from "../components/secure-content";
import {useProfile} from "../contexts/profile-context";
import {findCommentsByImdbID, postComment} from "../services/movie-service";

const api = axios.create({
  withCredentials: true
});

const DetailsOmdb = () => {
  // const [currentUser, setCurrentUser] = useState(null)
  //
  // const fetchCurrentUser = async () => {
  //   try {
  //     const response = await api.post("http://localhost:4000/api/profile")
  //     setCurrentUser(response.data)
  //   } catch (e) {
  //     // navigate('/')
  //   }
  // }'
  const {profile} = useProfile()

  const [comments, setComments] = useState([])
  const [movieDetails, setMovieDetails] = useState({})
  const [ourMovieDetails, setOurMovieDetails] = useState({})
  const OMDB_URL = 'https://www.omdbapi.com/?apikey=852159f0&i'
  const {imdbID} = useParams()
  const fetchMovieByImdbIDFromOmdb = async () => {
    // TODO: this is a NONO ... this should be in omdb-service.js
    const response = await axios(`${OMDB_URL}=${imdbID}`)
    setMovieDetails(response.data)
  }
  const fetchMovieByImdbIDFromOurApi = async () => {
    // TODO: this is a NONO ... this should be in a movies-service.js
    const response = await axios(`http://localhost:4000/api/movies/${imdbID}`)
    setOurMovieDetails(response.data)
  }

  const findCommentsForThisMovie = async () => {
    const comments = await findCommentsByImdbID(imdbID)
    setComments(comments)
  }
  useEffect(() => {
    fetchMovieByImdbIDFromOmdb()
    fetchMovieByImdbIDFromOurApi()
    findCommentsForThisMovie()
    // fetchCurrentUser()
  }, [])

  const handleLikes = async () => {
    console.log(movieDetails)
    const movie = {
      title: movieDetails.Title,
      poster: movieDetails.Poster,
      imdbID: movieDetails.imdbID
    }
    const response = await axios.post("http://localhost:4000/api/likes", movie)
    setOurMovieDetails(response.data)
  }

  const commentRef = useRef()

  const handleComment = async () => {
    const actualComment = await postComment(profile._id, movieDetails.imdbID, {
      comment: commentRef.current.value,
      commenter: profile._id,
      commenterEmail: profile.email
    })
    // console.log(actualComment)
    setComments([...comments, actualComment])
  }

  return (
    <div>
      <h1>{movieDetails.Title}</h1>
      <p>
        <img src={movieDetails.Poster} height={100} className="me-2 float-start"/>
        Directed by: {movieDetails.Director}
        <br/>
        {movieDetails.Plot}
      </p>
      <h2>Cast</h2>

      {/*<ul>*/}
      {/*{movieDetails.Actors.split(',')*/}
      {/*  .map(actor => <li>{actor}</li>)}*/}
      {/*</ul>*/}

      <SecureContent>
        Welcome: {profile && profile.email}
        {profile && profile._id}
        {movieDetails.imdbID}
        <div>
          <button onClick={handleLikes}>
            Like ({ourMovieDetails && ourMovieDetails.likes}) !!!!!
          </button>
          <button>Dislike</button>
          <h2>Leave a comment</h2>
          <textarea ref={commentRef} className="form-control"></textarea>
          <button onClick={handleComment}
                  className="btn btn-primary">
            Post
          </button>
        </div>
      </SecureContent>

      <ul className="list-group">
        {
          comments.map(comment =>
            <li className="list-group-item">
              {comment && comment.commenterEmail}
              <hr/>
              {comment && comment.comment}
            </li>
          )
        }
      </ul>

      <ul>
        <li>Alice liked this movie</li>
        <li>Bob hated this movie</li>
      </ul>

      <Pre obj={movieDetails}/>
      <Pre obj={imdbID}/>
    </div>
  );
};

export default DetailsOmdb;