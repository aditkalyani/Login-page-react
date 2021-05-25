import React from 'react';
import AddUser from './components/AddUser/AddUser'
import { useState, Fragment } from 'react'
import UserList from './components/UserList/UserList'

function App() {

  const [userList, setUserList] = useState([])

  const getUserFormData = (userData)=>{
    setUserList((prevData)=>{
      return [userData, ...prevData]
    })
  }

  return (
    <Fragment>
      <AddUser getUserFormData={getUserFormData}/>
      <UserList userList={userList}/>
    </Fragment>
  );
}

export default App;
