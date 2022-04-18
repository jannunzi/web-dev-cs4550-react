import React, {useEffect, useState} from 'react';
import {useProfile} from "../contexts/profile-context";

const SecureContent = ({children}) => {
  const {checkLoggedIn} = useProfile()
  const [loggedIn, setLoggedIn] = useState(false)
  const check = async () => {
    try {
      await checkLoggedIn()
      setLoggedIn(true)
    } catch (e) {
      setLoggedIn(false)
    }
  }
  useEffect(() => { check() }, [])
  if(loggedIn) {
    return children
  }
  return null
};

export default SecureContent;