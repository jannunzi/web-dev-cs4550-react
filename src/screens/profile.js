import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import {useProfile} from "../contexts/profile-context";

const api = axios.create({
  withCredentials: true
});

const Profile = () => {
  const navigate = useNavigate()
  const {profile, signout} = useProfile()
  
  const logout = async () => {
    try {
      await signout()
    } catch (e) {
      
    }
    navigate('/signin')
  }
  
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
    </div>
  );
};

export default Profile;