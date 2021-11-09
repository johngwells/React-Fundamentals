import React, { useState } from "react";

function User(props) {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

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
    e.preventDefault()
    setUsername(e.target.value);
  };

  const ageHandler = (e) => {
    setAge(e.target.value);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>
          Username:
          <input
            onChange={usernameHandler}
            value={username}
            type="text"
            name="username"
          />
        </label>
        <label>
          Age:
          <input onChange={ageHandler} value={age} type="number" name="age" />
        </label>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default User;
