import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModel from "../UI/ErrorModal";

const AddUser = props => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error,setErrorState] = useState();
  const addUserHandler = event => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      return setErrorState({
        "title" : "Invalid Input",
        "message" :"Please enter valid name or age "
      })
    }
    if (+enteredAge < 1) {
      return setErrorState({
        "title" : "Invalid Age",
        "message" :"Please enter valid age"
      })
    }
    props.onAddUser(enteredUserName,enteredAge)
    console.log(enteredUserName, enteredAge);
    setEnteredUserName("");
    setEnteredAge("");
  };
  const enteredUserNameHandler = event => {
    setEnteredUserName(event.target.value);
  };
  const enteredAgeHandler = event => {
    setEnteredAge(event.target.value);
  };
  const errorHandler=()=>{
    setErrorState(null)
  };
  return (
    <div>
   {error && <ErrorModel title ={error.title} message = {error.message} onError={errorHandler}/> } 
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={enteredUserName}
          onChange={enteredUserNameHandler}
        />
        <label htmlFor="age">Age</label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={enteredAgeHandler}
        />
        <Button type="submit"> Add User</Button>
      </form>
    </Card>
    </div>
  );
};
export default AddUser;
