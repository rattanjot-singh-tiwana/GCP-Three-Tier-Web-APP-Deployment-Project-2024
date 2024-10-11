// src/MessageList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';


const MessageList = () => {
    const [messages, setMessages] = useState([]);
    const [error, setError] = useState(null);

    const fetchMessages = async () => {
        try {
            const res = await axios.get('http://35.227.40.37:5000/api/messages');
            setMessages(res.data);
        } catch (err) {
            setError(err.response.data.error);
        }
    };

    useEffect(() => {
        fetchMessages();
    }, []);

    return (
        <div>
            <h2>Messages</h2>
            {error && <p>{error}</p>}
            <ul>
                {messages.map((msg, index) => (
                    <li key={index}>{msg}</li>
                ))}
            </ul>
        </div>
    );
};

export default MessageList;
