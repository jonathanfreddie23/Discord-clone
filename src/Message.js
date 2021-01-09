import { Avatar } from '@material-ui/core';
import React from "react";
import "./Message.css"

function Message({user, message }) {
    return (
    <div className="Messages">
        <Avatar src={user.photo} />
        <div className="message__info">
         <h4>
            {user.displayName}
            
        </h4>
            <p>{ message  }</p>
        </div>
    </div>
    );
}

export default Message;
