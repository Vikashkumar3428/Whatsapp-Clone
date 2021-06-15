import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './Chat.css';
import { Avatar,IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon ,Mic } from '@material-ui/icons';
import MoreVertIcon from  '@material-ui/icons/MoreVert';
import SearchOutLined from  '@material-ui/icons/SearchOutlined';
import db from './firebase';

function Chat() {
    const [input ,setInput] = useState("");
    const [seed,setSeed] = useState('');
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState("");
    
    useEffect(() => {
        if(roomId){
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => {
                setRoomName(snapshot.data().name);
            });
        }
    }, [roomId])

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [roomId]);
    
    const sendMessage = (e) => {
       e.preventDefault();
        console.log("You typed >>> ",input);
        
        setInput("");
    };
    
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="chat__headerInfo">
                    <h3>{roomName}</h3>
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
                <p className="chat__message"><span className="chat__name">Sunny</span>Hello <span className="timestamp">3:53PM</span></p>
                <p className="chat__message"><span className="chat__name">Monty</span>Hii <span className="timestamp">3:53PM</span></p>
                <p className="chat__message"><span className="chat__name">Rishab</span>Busy Person <span className="timestamp">3:53PM</span></p>
                <p className="chat__message"><span className="chat__name">Sunny</span>Hello <span className="timestamp">3:53PM</span></p>
                <p className="chat__message"><span className="chat__name">Monty</span>Hii <span className="timestamp">3:53PM</span></p>
                <p className="chat__message"><span className="chat__name">Rishab</span>Busy Person <span className="timestamp">3:53PM</span></p>
                <p className="chat__message"><span className="chat__name">Sunny</span>Hello <span className="timestamp">3:53PM</span></p>
                <p className="chat__message"><span className="chat__name">Monty</span>Hii <span className="timestamp">3:53PM</span></p>
                <p className="chat__message"><span className="chat__name">Rishab</span>Busy Person <span className="timestamp">3:53PM</span></p>
                <p className="chat__message"><span className="chat__name">Sunny</span>Hello <span className="timestamp">3:53PM</span></p>
                <p className="chat__message"><span className="chat__name">Monty</span>Hii <span className="timestamp">3:53PM</span></p>
                <p className="chat__message"><span className="chat__name">Rishab</span>Busy Person <span className="timestamp">3:53PM</span></p>
                <p className="chat__message"><span className="chat__name">Sunny</span>Hello <span className="timestamp">3:53PM</span></p>
                <p className="chat__message"><span className="chat__name">Monty</span>Hii <span className="timestamp">3:53PM</span></p>
                <p className="chat__message"><span className="chat__name">Rishab</span>Busy Person <span className="timestamp">3:53PM</span></p>
                <p className="chat__message"><span className="chat__name">Sunny</span>Hello <span className="timestamp">3:53PM</span></p>
                <p className="chat__message"><span className="chat__name">Monty</span>Hii <span className="timestamp">3:53PM</span></p>
                <p className="chat__message"><span className="chat__name">Rishab</span>Busy Person <span className="timestamp">3:53PM</span></p>
                <p className="chat__message"><span className="chat__name">Sunny</span>Hello <span className="timestamp">3:53PM</span></p>
                <p className="chat__message"><span className="chat__name">Monty</span>Hii <span className="timestamp">3:53PM</span></p>
                <p className={`chat__message ${true &&'chat__reciever'}`}><span className="chat__name">Rishab</span>Busy Person <span className="timestamp">3:53PM</span></p>
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
