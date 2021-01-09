import React from 'react'
import "./ChatHeader.css"
import NotificationsIcon from '@material-ui/icons/Notifications';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import SearchIcon from '@material-ui/icons/Search';
import { HelpRounded } from '@material-ui/icons';
import SendIcon from '@material-ui/icons/Send';

function ChatHeader({ channelName }) {
    return (
        <div className="ChatHeader">
            <div className="ChatHeader__left">
            <h3><span className="ChatHeader_hash">#</span>
            {channelName}
            </h3>  
            </div>
            <div className="ChatHeader__right">
            <NotificationsIcon />
            <EditLocationIcon />
            <PeopleAltIcon />
            <div className="chatHeader__search">
            <input placeholder="Search" />
            <SearchIcon />
            </div>

            <SendIcon />
            <HelpRounded />
            </div>
        </div>
    )
}

export default ChatHeader;
