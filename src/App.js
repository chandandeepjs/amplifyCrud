import React, { useState } from "react";
import AddUser from "./components/Users/AddUsers";
import UsersList from "./components/Users/UsersList";
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import Button from "../src/components/UI/Button";
import {AmplifySignOut,withAuthenticator} from '@aws-amplify/ui-react';
import classes from '../src/components/Users/UsersList.module.css';
Amplify.configure(awsconfig);

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (uName, Uage) => {
    setUsersList(preUserList => {
      return [...preUserList, { name: uName, age: Uage ,id:Math.random().toString() }];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
      
      <AmplifySignOut className = {classes.awsbutton}/>
      
    </div>
  );
}

export default withAuthenticator(App); 
