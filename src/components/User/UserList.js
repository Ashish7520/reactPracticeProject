import React from "react";



const UserList = (props) =>{

    return <ul className="ul"> 
        {props.user.map(user=><li>{user.name} ({user.age} Year old)</li>)}
    </ul>
}

export default UserList;