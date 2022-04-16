import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const api = axios.create({
  withCredentials: true
});

const Profile = () => {
  const [currentUser, setCurrentUser] = useState({})
  const navigate = useNavigate()
  const fetchCurrentUser = async () => {
    try {
      const response = await api.post("http://localhost:4000/api/profile")
      setCurrentUser(response.data)
    } catch (e) {
      navigate('/')
    }
  }
  useEffect(() => {
    fetchCurrentUser()
  }, [])
  return (
    <div>
      <h1>Profile</h1>
      {JSON.stringify(currentUser)}
    </div>
  );
};

export default Profile;