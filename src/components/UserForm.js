import React, { useState } from "react";

import Card from "../components/UI/Card";
import Button from "../components/UI/Button";
import classes from "./UserForm.module.css";

function User(props) {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      return;
    }
    if (+age < 1) {
      return;
    }
    const inputData = {
      username: username,
      age: age
    };
    props.onSaveUserData(inputData);
    setUsername("");
    setAge("");
    console.log("User Form", inputData);
  };

  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };

  const ageHandler = (e) => {
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
          <input
            id="age"
            onChange={ageHandler}
            value={age}
            type="number"
            name="age"
          />
        </label>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}

export default User;
