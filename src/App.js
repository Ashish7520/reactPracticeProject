import React,{useState} from 'react';

import AddUser from './components/User/AddUser';
import UserList from './components/User/UserList';

function App() {
  const [enteredUserValue, setUserValue] = useState([]);

  const addUserHandler = (uName, uAge) =>{
    setUserValue((previousValue)=>{
      return [...previousValue,{name:uName,age:uAge,key:Math.random().toString()}]
    })
  }
  

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList user ={enteredUserValue} />
    </div>
  );
}

export default App;
