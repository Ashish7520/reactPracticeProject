import React, {useState, useRef} from "react";

import Cart from "../UI/Card";
import Error from "../UI/Error";
import Wrapper from "../helper/wrapper";
import './AddUser.css'


const AddUser = (props) =>{
    const inputUsernameRef = useRef();
    const inputAgeRef = useRef();

    const [enteredUsername, setUsername] = useState('');
    const [enteredAge, setAge] = useState('')
    const [error, isError] = useState()

    const formSubmitHandler = (event) =>{
        event.preventDefault();
        const enteredname = inputUsernameRef.current.value;
        const enteredUserAge = inputAgeRef.current.value;

        if(enteredUserAge.trim().length === 0 || enteredname.trim().length === 0){
            isError({
                title:"invalid user input",
                massage:"Please enter valid user input (input should be non-empty)"
            })
            return;
        }

        if(enteredUserAge < 1){
            isError({
                title:"invalid age entered",
                massage:"Please enter valid age (age>0)"
            })
            return;
        }
        // if(enteredAge.trim().length === 0 || enteredUsername.trim().length === 0){
        //     isError({
        //         title:"invalid user input",
        //         massage:"Please enter valid user input (input should be non-empty)"
        //     })
        //     return;
        // }

        // if(enteredAge < 1){
        //     isError({
        //         title:"invalid age entered",
        //         massage:"Please enter valid age (age>0)"
        //     })
        //     return;
        // }

        props.onAddUser(enteredname,enteredUserAge);
        inputUsernameRef.current.value = '';
        inputAgeRef.current.value='';

       
        // setUsername('');
        // setAge('');
    }

    // const usernameHandler = (event)=>{
    //     const username = event.target.value;
    //     setUsername(username);
    // }

    // const ageHandler = (event)=>{
    //     const age = event.target.value;
    //     setAge(age);
    // }

    const errorHandler = ()=>{
        isError(null);
    }

    return (
        <React.Fragment>
            {error &&<Error title ={error.title} massage ={error.massage} onConfirm={errorHandler} />}
        <Cart className="userCart">
        <form className="form" onSubmit={formSubmitHandler}>
            <label htmlFor="username">Username</label>
            <br />
            {/* <input id="username" type="text" value={enteredUsername} onChange={usernameHandler}  /> */}
            <input id="username" type="text" ref={inputUsernameRef} />

            <br/>
            <label htmlFor="age">Age (in Year)</label>
            <br/>
            {/* <input id="age" type="number" value={enteredAge} onChange={ageHandler} /> */}
            <input id="age" type="number" ref={inputAgeRef}/>
            <br />
            <button type="submit">Add User</button>
        </form>
        </Cart>
        </React.Fragment>
    )
}

export default AddUser