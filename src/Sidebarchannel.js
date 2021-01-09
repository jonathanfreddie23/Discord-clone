import React from 'react'
import { useDispatch } from 'react-redux';
import { setChannelInfo} from './features/counter/appSlice';
import "./Sidebarchannel.css"

function Sidebarchannel({ id, channelName}) {
    const dispatch = useDispatch();

    return (
    <div className="Sidebarchannel" onClick={() =>dispatch
        (setChannelInfo({
            channel: id,
            channelName: channelName,
                 })
              )
            }
        >
        <h4>
         <span className="Sidebarchannel_hash">#</span>{channelName}
        </h4> 
            
        </div>
    );
}

export default Sidebarchannel;
