import React, { useState } from "react";

import Card from '../components/UI/Card'
import classes from './UserForm.module.css';

function User(props) {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    const inputData = {
      username: username,
      age: age
    };
    props.onSaveUserData(inputData)
    console.log('User Form', inputData);
  };

  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };

  const ageHandler = (e) => {
    if (e.target.value < 0) {
      console.log('Age must be a positive number')
      return
    }
    setAge(e.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">
          Username:
          <input
            id="username"
            onChange={usernameHandler}
            value={username}
            type="text"
            name="username"
          />
        </label>
        <label htmlFor="age">
          Age:
          <input id="age" onChange={ageHandler} value={age} type="number" name="age" />
        </label>
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
}

export default User;
