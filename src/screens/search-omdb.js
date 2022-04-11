import React, {useEffect, useRef, useState} from 'react';
import axios from "axios";
import Pre from "../utils/pre";
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";

const SearchOmdb = () => {
  const [movies, setMovies] = useState([])
  const {searchString} = useParams()
  const titleRef = useRef()
  const navigate = useNavigate()
  const location = useLocation()
  const OMDB_URL = 'https://www.omdbapi.com/?apikey=852159f0&s'
  const searchMoviesByTitle = async () => {
    const response = await axios.get(`${OMDB_URL}=${titleRef.current.value}`)
    setMovies(response.data.Search)
    navigate(`/omdb/${titleRef.current.value}`)
  }
  useEffect(() => {
    if(searchString) {
      titleRef.current.value = searchString
      searchMoviesByTitle()
    }
  }, [])
  return (
    <div>
      <h1>Search Omdb</h1>

      <ul className="list-group">
        <li className="list-group-item">
          <button
            onClick={searchMoviesByTitle}
            className="btn btn-primary float-end">
            Search
          </button>
          <input ref={titleRef}
                 className="form-control w-75"/>
        </li>
        {
          movies.map(movie =>
          <li className="list-group-item">
            <Link to={`/omdb/details/${movie.imdbID}`}>
              <img src={movie.Poster} height={30}
                   className="me-2"/>
              {movie.Title}
            </Link>
          </li>
          )
        }
      </ul>

      <Pre obj={movies}/>
    </div>
  );
};

export default SearchOmdb;