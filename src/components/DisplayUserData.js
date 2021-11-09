function DisplayUserData(props) {
  console.log("DisplayUsers", props);
  return (
    <div>
      {props.users.map((user) => {
        return (
          <ul>
            <li style={{ listStyleType: 'none'}} key={user.id}>Username: {user.username}</li>
            <li style={{ listStyleType: 'none'}}>Age: {user.age}</li>
          </ul>
        );
      })}
    </div>
  );
}

export default DisplayUserData;
