// src/App.js
import React from 'react';
import { useState } from 'react';
import './App.css';
import MessageForm from './MessageForm';
import MessageList from './MessageList';
import FileUpload from './FileUpload';

function App() {
    const [messages, setMessages] = useState([]); // State to hold messages

    const addMessage = (newMessage) => {
        setMessages((prevMessages) => [...prevMessages, newMessage]); // Add new message to the list
    };

    return (
        <div className="App">
            <h1>Message and File Upload App</h1>
            <MessageForm addMessage={addMessage} /> {/* Pass addMessage function as prop */}
            <MessageList messages={messages} /> {/* Pass messages as prop */}
            <FileUpload />
        </div>
    );
}

export default App;