import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import db from './firebase';
import './SidebarChat.css';
import { Link } from "react-router-dom";

function SidebarChat({ id, name, addNewChat }) {

    const [seed,setSeed] = useState('');
    const [messages, setMessages] = useState("");

    useEffect(() => {
        if(id){
            db.collection('rooms').doc(id).collection('messages')
            .orderBy('timestamp','desc').onSnapshot(snapshot => {
                setMessages(snapshot.docs.map((doc) => doc.data()))
            })
        }
    }, [id]);
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    const createChat = () => {
        const roomName = prompt("Please enter name for chat");
        if(roomName)
        {
            db.collection('rooms').add(
                {
                    name :roomName,
                }
            );
        }
    };
    console.log(id);

    return !addNewChat ? (
        <Link to ={`/rooms/:${id}`} key = {id}>
            <div className ="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="sidebarChat__info">
                    <h3>{name}</h3>
                    <p>{messages[0]?.message}</p>
                </div>
            </div>
        </Link>
    ):
    (
        <div onClick ={createChat} className="sidebarChat">
            <h3>Add New Chat</h3>
        </div>
    )
}

export default SidebarChat;
