// src/FileUpload.js
import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [response, setResponse] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);

        try {
            const res = await axios.post('http://35.227.40.37:5000/api/upload_file', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setResponse(res.data);
            setFile(null); // Clear the file input
        } catch (error) {
            setResponse(error.response.data);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} />
                <button type="submit">Upload File</button>
            </form>
            {response && <p>{response.message || response.error}</p>}
        </div>
    );
};

export default FileUpload;
