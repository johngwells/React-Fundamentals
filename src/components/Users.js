import UserForm from './UserForm';

function Users(props) {
  const saveUserDataHandler = (enteredUserData) => {
    const userData = {
      ...enteredUserData,
      id: Math.random().toString()
    }
    props.onAddUser(userData)
  }

  return (
    <div>
      <UserForm onSaveUserData={saveUserDataHandler} />
    </div>
  )
}

export default Users;
