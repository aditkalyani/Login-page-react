import React from 'react';
import AddUser from './components/AddUser/AddUser'
import { useState } from 'react'
import UserList from './components/UserList/UserList'

function App() {

  const [userList, setUserList] = useState([])

  const getUserFormData = (userData)=>{
    setUserList((prevData)=>{
      return [userData, ...prevData]
    })
  }

  return (
    <div>
      <AddUser getUserFormData={getUserFormData}/>
      <UserList userList={userList}/>
    </div>
  );
}

export default App;
