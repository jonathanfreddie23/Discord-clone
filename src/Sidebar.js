import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import Sidebarchannel from "./Sidebarchannel";
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import { InfoOutlined } from "@material-ui/icons";
import CallIcon from '@material-ui/icons/Call';
import { Avatar } from "@material-ui/core";
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';
import { selectUser } from "./features/counter/userSlice";
import { useSelector } from "react-redux";
import db, { auth } from "./firebase";


function Sidebar() {
        const user = useSelector(selectUser);
        const [Channels, setchannels] = useState([]);

        useEffect(() => {
            db.collection("channels").onSnapshot(snapshot => {
                setchannels(snapshot.docs.map(doc => ({
                    id: doc.id,
                    channel: doc.data(),
                })))

            });
            
        }, []);

        const handleAddChannel = () => {
            const channelName = prompt("enter channel name");

            if (channelName){
                db.collection("channels").add({
                    channelName: channelName,
                });
            }
        };


    return (
        <div className="Sidebar">
          <div className="Sidebar__top">
            <h3> Discord Clone</h3>
            <ExpandMoreIcon />
          </div>

          <div className="Sidebar__channels">
             <div className="Sidebar__channelsHeader">
                <div className="Sidebar__header">
                    <ExpandMoreIcon />
                    <h4>Text Channels</h4>
                 </div>

                 <AddIcon onClick={handleAddChannel} 
                 className="sidebar__`addchannel`" />
             </div>
            

            <div className="sidebar__channelsList">
                {Channels.map(({ id, channel}) => (
                    <Sidebarchannel 
                    key={id}
                    id={id}
                    channelName={channel.channelName}
                     />
                ))}
                
            </div>
          </div>

          <div className="Sidebar__voice">
                <SignalCellularAltIcon
                    className="Sidebar_voiceIcon"
                    fontSize="large"
                />
                <div className="Sidebar__voiceInfo">
                    <h3>Voice connected</h3>
                    <p>stream</p>
                </div>

                <div className="Sidebar__voiceIcons">
                    <InfoOutlined />
                    <CallIcon />
                </div>
             </div>
             <div className="Sidebar__profile">
                <Avatar onClick={() => auth.signOut()} src={user.photo} />
                <div className="Sidebar__profileInfo">
                    <h3>{user.displayName}</h3>
                    <p>#{user.uid.substring(0, 5)}</p>
                </div>
                <div className="Sidebar__profileIcons">
                        <MicIcon />
                        <HeadsetIcon />
                        <SettingsIcon />
                </div>
             </div>
        </div>
    );
}
 
export default Sidebar;
