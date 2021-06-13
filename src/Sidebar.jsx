import React from 'react';
import {Avatar, IconButton} from "@material-ui/core";
import DonutLargeIcon from  '@material-ui/icons/DonutLarge';
import ChatIcon from  '@material-ui/icons/Chat';
import MoreVertIcon from  '@material-ui/icons/MoreVert';
import SearchOutLined from  '@material-ui/icons/SearchOutlined';
import "./Sidebar.css";
import SidebarChat from './SidebarChat';

function Sidebar(props) {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src="https://avatars.dicebear.com/api/human/vikash.svg"/>
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutLined />
                    <input type="text" placeholder="Search or start new chat" />  
                </div>
                
            </div>
            <div className="sidebar__chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    );
}

export default Sidebar;