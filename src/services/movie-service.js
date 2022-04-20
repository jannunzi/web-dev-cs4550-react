import axios from "axios";
const MOVIE_API = 'http://localhost:4000/movies'

const api = axios.create({
  withCredentials: true
})

export const postComment = async (userId, imdbID, comment) => {
  const response = await api.post(`${MOVIE_API}/${imdbID}/comments/${userId}`, comment)
  return response.data
  // return comment
}

export const findCommentsByImdbID = async (imdbID) => {
  const response = await api.get(`${MOVIE_API}/${imdbID}/comments`)
  return response.data
}

export const findCommentsByUserId = async (userId) => {
  const response = await api.get(`http://localhost:4000/users/${userId}/comments`)
  return response.data
}
