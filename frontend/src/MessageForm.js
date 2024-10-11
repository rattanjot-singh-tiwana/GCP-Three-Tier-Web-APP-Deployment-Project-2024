import React, { useState } from 'react';

const MessageForm = ({addMessage}) => {
    const [message, setMessage] = useState('');
    const [responseMessage, setResponseMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!message) {
            setError('Message is required');
            return;
        }

        try {
            const response = await fetch('http://35.227.40.37:5000/api/add_message', { method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    message,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setResponseMessage(data.message);
                setMessage('');  // Clear the form
                setError('');
            } else {
                setError(data.error);
            }
        } catch (error) {
            setError('Failed to submit the message');
        }
    };

    return (
        <div>
            <h2>Submit a Message</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="message">Message: </label>
                    <input
                        type="text"
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>

            {responseMessage && <p style={{ color: 'green' }}>{responseMessage}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default MessageForm;
