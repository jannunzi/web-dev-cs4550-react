import axios from "axios";

const TUIT_API_URL = 'http://localhost:4000/api/tuits';

export const findAllTuits = async () => {
  const response = await axios.get(TUIT_API_URL);
  return response.data;
}

export const deleteTuit = async (tuitId) => {
  const response = await axios.delete(`${TUIT_API_URL}/${tuitId}`);
  return response.data;
}

export const createTuit = async (tuit) => {
  const response = await axios.post(TUIT_API_URL, tuit);
  return response.data;
}

export const likeTuit = async (tid) => {
  const response = await axios.put(`${TUIT_API_URL}/${tid}/like`);
  return response.data;
}

export const unlikeTuit = async (tid) => {
  const response = await axios.put(`${TUIT_API_URL}/${tid}/unlike`);
  return response.data;
}

export const updateTuit = async (tid, tuit) => {
  const response = await axios.put(`${TUIT_API_URL}/${tid}`, tuit);
  return response.data;
}