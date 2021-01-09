import React, { useEffect, useState } from 'react';
import "./Chat.css"
import ChatHeader from './ChatHeader';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Message from "./Message";
import { useSelector } from 'react-redux';
import { selectchannel, selectchannelName } from './features/counter/appSlice';
import { selectUser } from './features/counter/userSlice';
import firebase from './firebase';
import db from './firebase';




function Chat() {
    const user = useSelector(selectUser);
    const channel = useSelector(selectchannel);
    const channelName = useSelector(selectchannelName);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);

   useEffect(() => {
      if (channel){
        db.collection("channels")
            .doc(channel)
            .collection("messages")
            .onSnapshot((snapshot) => 
                 setMessages(snapshot.docs.map((doc) => doc.data()))
             );
      }
    
    
    }, [channel]);

    const sendMessage = (e) => {
        e.preventDefault();

        db.collection("channels").doc(channel).collection("messages").add({
            message: input,
            user: user,
        });

        setInput("");
    };


     return (
        <div className="chat">
            <ChatHeader channelName={channelName} />
            <div className="Chat__messages">
            {messages.map((message) => (
                <Message
                message= {message.message}
                user={message.user}
                />
               
            ))}
               
            </div>

            <div className="Chat__input">
                <AddCircleOutlineIcon fontSize="large" />
                <form>
                    <input value={input}
            
                     onChange={(e) => setInput(e.target.value)}
                     placeholder={`Message #${channelName}`} 
                    />
                    <button 
               
                    className="Chat_inputButton" 
                    type="submit"
                    onClick={sendMessage}                    >
                      Send Message
                    </button>
                </form>

                <div className="Chat__inputIcons">
                    <CardGiftcardIcon fontSize="large" />
                    <GifIcon fontSize="large" />
                    <EmojiEmotionsIcon fontSize="large" />
                </div>
            </div>
        </div> 
    );
}

export default Chat;