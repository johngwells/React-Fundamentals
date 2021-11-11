import React, { useState } from "react";
import Users from "./components/Users";
import DisplayUserData from "./components/DisplayUserData";

// const DUMMY_USERS = [
//   {
//     username: "Yo",
//     Age: 99
//   }
// ];

function App() {
  const [users, setUsers] = useState([]);
  const addUserHandler = (data) => {
    setUsers((prevData) => {
      return [data, ...prevData];
    });
  };

  return (
    <div>
      <Users onAddUser={addUserHandler} />
      <DisplayUserData users={users} />
    </div>
  );
}

export default App;
