import classes from "./DisplayUserData.module.css";

import Card from "./UI/Card";

function DisplayUserData(props) {
  console.log("DisplayUsers", props);
  return (
    <Card className={classes.users}>
      {props.users.map((user) => (
        <ul key={user.id}>
          <li style={{ listStyleType: "none" }}>
            Username: {user.username} is ({user.age} years old)
          </li>
        </ul>
      ))}
    </Card>
  );
}

export default DisplayUserData;
