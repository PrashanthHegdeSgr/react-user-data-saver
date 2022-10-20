import React,{useState} from 'react';
import AddUser from './components/User/AddUser';
import UsersList from './components/User/UsersList';

function App() {
  const [usersList,setUsersList]=useState([]);

  const addUserHandler = (name, age) => {
    setUsersList((prevList => {
      return [...prevList, {name,age,id:Math.random.toString()}]
    }));
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UsersList users={usersList}></UsersList>
    </div>
  );
}

export default App;
