import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Pre from "../utils/pre";
import axios from "axios";

const DetailsOmdb = () => {
  const [movieDetails, setMovieDetails] = useState({})
  const [ourMovieDetails, setOurMovieDetails] = useState({})
  const OMDB_URL = 'https://www.omdbapi.com/?apikey=852159f0&i'
  const {imdbID} = useParams()
  const fetchMovieByImdbIDFromOmdb = async () => {
    const response = await axios(`${OMDB_URL}=${imdbID}`)
    setMovieDetails(response.data)
  }
  const fetchMovieByImdbIDFromOurApi = async () => {
    const response = await axios(`http://localhost:4000/api/movies/${imdbID}`)
    setOurMovieDetails(response.data)
  }
  useEffect(() => {
    fetchMovieByImdbIDFromOmdb()
    fetchMovieByImdbIDFromOurApi()
  }, [])

  const handleLikes = () => {
    console.log(movieDetails)
    const movie = {
      title: movieDetails.Title,
      poster: movieDetails.Poster,
      imdbID: movieDetails.imdbID
    }
    axios.post("http://localhost:4000/api/likes", movie)
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
      <button onClick={handleLikes}>
        Like ({ourMovieDetails.likes})
      </button>
      <button>Dislike</button>
      <h2>Leave a comment</h2>
      <textarea></textarea>
      <button>Post</button>

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