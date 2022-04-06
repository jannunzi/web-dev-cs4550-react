import React, {useEffect, useState} from 'react';
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState([])
  const findUsers = async () => {
    const response = await axios.get("http://localhost:4000/api/users")
    setUsers(response.data)
  }
  useEffect(() => {
    findUsers()
  }, [])
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {
          users.map(user => 
          <li>
            {user.email}
          </li>
          )
        }
      </ul>
    </div>
  );
};

export default UserList;