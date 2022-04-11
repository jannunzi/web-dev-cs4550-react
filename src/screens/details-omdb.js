import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Pre from "../utils/pre";
import axios from "axios";

const DetailsOmdb = () => {
  const [movieDetails, setMovieDetails] = useState({})
  const OMDB_URL = 'https://www.omdbapi.com/?apikey=852159f0&i'
  const {imdbID} = useParams()
  const fetchMovieByImdbID = async () => {
    const response = await axios(`${OMDB_URL}=${imdbID}`)
    setMovieDetails(response.data)
  }
  useEffect(() => {
    fetchMovieByImdbID()
  }, [])
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
      <button>Like</button>
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