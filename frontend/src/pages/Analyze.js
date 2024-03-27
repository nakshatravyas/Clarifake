import React, { useState } from 'react'
import axios from 'axios'

export default function Analyze() {
    const [isLoading, setisLoading] = useState(false)
    const [file, setFile] = useState(null)
    const [uploadStatus, setUploadStatus] = useState(null);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (!file) {
            alert('Please select a file to upload');
            return;
        }

        const formData = new FormData();
        formData.append('videoFile', file);

        try {
            const response = await axios.post('http://localhost:5000/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            // setUploadStatus(response);
            console.log(response);
        } catch (error) {
            console.error('Error uploading file:', error);
        }

    }
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    }
    return (
        <section className='analyze-section' id='analyze'>
            <div className="container">
                <h2 className='title'>Identify deepfake videos</h2>
                <form onSubmit={handleFormSubmit} className='form'>
                    <div className="input-container">
                        <label for="images" className="drop-container" id="dropcontainer">
                            <span className="drop-title">Drop video file here</span>
                            or
                            <input type="file" id="images" required onChange={handleFileChange} />
                        </label>
                    </div>
                    <button className='btn' type='submit' disabled={isLoading ? true : false}>Generate</button>
                </form>
                {isLoading ? <div className="loader">
                    <div className="load-inner load-one"></div>
                    <div className="load-inner load-two"></div>
                    <div className="load-inner load-three"></div>
                    <div className="load-inner load-four"></div>
                    <span className="text">Analyzing...</span>
                </div> : ''}

            </div>
        </section>
    )
}
