import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from './components/UserList';


function ShowUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://reqres.in/api/users');
        if(response.data!=null){
            setUsers(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching GitHub users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="App">
      <UserList users={users} />
    </div>
  );
}

export default ShowUsers;
