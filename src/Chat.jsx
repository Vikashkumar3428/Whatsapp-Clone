import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './Chat.css';
import { Avatar,IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon ,Mic } from '@material-ui/icons';
import MoreVertIcon from  '@material-ui/icons/MoreVert';
import SearchOutLined from  '@material-ui/icons/SearchOutlined';
import db from './firebase';
import firebase from 'firebase';
import {useStateValue} from './StateProvider';

function Chat() {
    const [input ,setInput] = useState("");
    const [seed,setSeed] = useState('');
    const { roomId } = useParams();
    const [messages, setMessages] = useState([]);
    const [roomName, setRoomName] = useState("");
    const [{user}, dispatch] = useStateValue();
    
    useEffect(() => {
       
        var m=""+roomId;
        var x= m.slice( 1 );
        if(x){

            db.collection("rooms").doc(x).get().then((doc) => {
    if (doc.exists) {
        setRoomName(""+doc.data().name);
    } else {console.log("No such document!");}
    }).catch((error) => {console.log("Error", error);});
          
        }
        db.collection("rooms").doc(roomId).collection("messages")
        .orderBy('timestamp',"asc").onSnapshot(snapshot => {
            setMessages(snapshot.docs.map((doc) => doc.data())
            );
        })

        setSeed(Math.floor(Math.random() * 5000));
    }, [roomId]);
    
    const sendMessage = (e) => {
        e.preventDefault();
        db.collection('rooms').doc(roomId).collection('messages').add({
            message: input,
            name: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })

        setInput("");
    }
    
    return (
        <div className="chat">
            <div className='chat_header'>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className='chat_headerInfo'>
                    <h3 className='chat-room-name'>{roomName}</h3>
                    <p className='chat-room-last-seen'>
                        Last seen {" "}
                        {new Date(
                            messages[messages.length - 1]?.
                            timestamp?.toDate()
                        ).toUTCString()}
                    </p>
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
            {messages.map(message => (
                    <p className={`chat_message ${ message.name == user.displayName && 'chat_receiver'}`}>
                        <span className="chat_name">{message.name}</span>
                        {message.message}
                        <span className="chat_timestemp">{new Date(message.timestamp?.toDate()).toUTCString()}</span>
                    </p>
                ))}
            </div>
            <div className="chat__footer">
                    <IconButton>
                        <InsertEmoticon/>
                    </IconButton>
                    <IconButton>
                        <AttachFile/>
                    </IconButton>
                        <form action="">
                            <input value={input} onChange ={e => setInput(e.target.value)} className="chat__sendMessage" type="text" placeholder="Type a message" />
                            <button type="submit" onClick= {sendMessage}>Send a message</button>
                        </form>
                    <IconButton className="chat__footerRight">
                        <Mic />
                    </IconButton>
            </div>
        </div>
    )
}

export default Chat;

