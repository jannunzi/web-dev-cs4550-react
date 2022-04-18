import React, {useRef} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useProfile} from "../contexts/profile-context";

const api = axios.create({
  withCredentials: true
});

const Signin = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const navigate = useNavigate()
  const {signin} = useProfile()
  const handleSigninBtn = async () => {
    try {
      // await api.post("http://localhost:4000/api/signin", {
      //   email: emailRef.current.value,
      //   password: passwordRef.current.value
      // })
      await signin(
        emailRef.current.value,
        passwordRef.current.value
      )
      navigate('/profile')
    } catch (e) {
      alert('oops')
    }
  }
  return (
    <div>
      <h1>Signin</h1>
      <input
        ref={emailRef}
        placeholder="email"
        type="email"
        className="form-control"
      />
      <input
        ref={passwordRef}
        placeholder="password"
        type="password"
        className="form-control"
      />
      <button
        onClick={handleSigninBtn}
        className="btn btn-primary">
        Signin
      </button>
    </div>
  );
};

export default Signin;