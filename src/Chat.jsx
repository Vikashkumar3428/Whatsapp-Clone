import React from 'react';
import './Chat.css';
import { Avatar,IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon } from '@material-ui/icons';
import MoreVertIcon from  '@material-ui/icons/MoreVert';
import SearchOutLined from  '@material-ui/icons/SearchOutlined';

function Chat() {
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />
                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen....</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutLined />
                    </IconButton>
                    
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                    
                </div>
            </div>
            <div className="chat__body">
                <p className="chat__message"><span className="chat__name">Sunny</span>Hello <span className="timestamp">3:53PM</span></p>
                <p className="chat__message"><span className="chat__name">Monty</span>Hii <span className="timestamp">3:53PM</span></p>
                <p className="chat__message"><span className="chat__name">Rishab</span>Busy Person <span className="timestamp">3:53PM</span></p>
            </div>
            <div className="chat__footer">
                    <IconButton>
                        <InsertEmoticon/>
                    </IconButton>
                    <IconButton>
                        <AttachFile/>
                    </IconButton>
            </div>
        </div>
    )
}

export default Chat;
