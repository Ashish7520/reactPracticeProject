import React from "react";

import './Error.css'

const Error = (props) =>{
    return (
        <div>
            <div className="backdrop" onClick={props.onConfirm} />
            <div className="modal">
            <header>
                <h2>{props.title}</h2>
            </header>
         
                <p>{props.massage}</p>
           
            <footer>
                <button onClick={props.onConfirm}>Okay</button>
            </footer>
            </div>
        </div>
    )
}

export default Error;