import React, { useState } from "react";

import Card from "../components/UI/Card";
import Button from "../components/UI/Button";
import ErrorModal from "../components/UI/ErrorModal";
import Wrapper from "./Helpers/Wrapper";

import classes from "./UserForm.module.css";

function User(props) {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name & age (non-empty values)."
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0)."
      });
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

  const errorHandler = () => {
    setError(null);
  }

  return (
    <Wrapper>
      {error && (
        <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />
      )}
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
    </Wrapper>
  );
}

export default User;
