import React, {useState} from "react";

import Cart from "../UI/Card";


const AddUser = (props) =>{
    const [enteredUsername, setUsername] = useState('');
    const [enteredAge, setAge] = useState('')

    const formSubmitHandler = (event) =>{
        event.preventDefault();
        if(enteredAge.trim().length === 0 || enteredUsername.trim().length === 0){
            return;
        }

        if(enteredAge < 1){
            return;
        }
        console.log('enterd username', enteredUsername);
        console.log('entered age' , enteredAge)
        setUsername('');
        setAge('');
    }

    const usernameHandler = (event)=>{
        const username = event.target.value;
        setUsername(username);
    }

    const ageHandler = (event)=>{
        const age = event.target.value;
        setAge(age);
    }

    return (
        <Cart className="userCart">
        <form className="form" onSubmit={formSubmitHandler}>
            <label htmlFor="username">Username</label>
            <br />
            <input id="username" type="text" value={enteredUsername} onChange={usernameHandler} />
            <br/>
            <label htmlFor="age">Age (in Year)</label>
            <br/>
            <input id="age" type="number" value={enteredAge} onChange={ageHandler}/>
            <br />
            <button type="submit">Add User</button>
        </form>
        </Cart>
    )
}

export default AddUser