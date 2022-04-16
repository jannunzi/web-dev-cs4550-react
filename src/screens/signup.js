import React, {useRef} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Signup = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const navigate = useNavigate()
  const handleSignupBtn = async () => {
    // alert(emailRef.current.value)
    try {
      // TODO: move this to user-service.js or auth-service.js
      await axios.post("http://localhost:4000/api/signup", {
        email: emailRef.current.value,
        password: passwordRef.current.value
      })
      navigate('/signin')
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