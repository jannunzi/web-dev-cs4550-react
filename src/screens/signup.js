import React, {useRef} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useProfile} from "../contexts/profile-context";

const api = axios.create({withCredentials: true})

const Signup = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const navigate = useNavigate()
  const {signup} = useProfile()
  const handleSignupBtn = async () => {
    // alert(emailRef.current.value)
    try {
      // TODO: move this to user-service.js or auth-service.js
      // await api.post("http://localhost:4000/api/signup", {
      //   email: emailRef.current.value,
      //   password: passwordRef.current.value
      // })
      await signup(
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
      <h1>Signup</h1>
      <input ref={emailRef}
             placeholder="username"
             type="email"
             className="form-control"/>
      <input ref={passwordRef}
             placeholder="username"
             type="password"
             className="form-control"/>
      <button onClick={handleSignupBtn}
              className="btn btn-primary">
        Signup</button>
    </div>
  );
};

export default Signup;