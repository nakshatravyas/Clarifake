import React, { useState } from 'react'

export default function Analyze() {
    const [isLoading, setisLoading] = useState(true)
    const [file, setFile] = useState(null)
    const [uploadStatus, setUploadStatus] = useState(null);

    const handleFormSubmit = async(e) => {
        e.preventDefault();
        if (!file) {
            alert('Please select a file to upload');
            return;
          }
      
          const formData = new FormData();
          formData.append('videoFile', file);
      
        //   try {
        //     const response = await axios.post('/upload', formData, {
        //       headers: {
        //         'Content-Type': 'multipart/form-data'
        //       }
        //     });
            
        //     setUploadStatus(response.data);
        //   } catch (error) {
        //     console.error('Error uploading file:', error);
        //   }

    }
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    }
    return (
        <section className='analyze-section' id='analyze'>
            <div className="container">
                <h2 className='title'>Identify deepfake videos</h2>
                <form onSubmit={handleFormSubmit} className='form'>
                    <div class="input-container">
                        <label for="images" class="drop-container" id="dropcontainer">
                            <span class="drop-title">Drop video file here</span>
                            or
                            <input type="file" id="images" required onChange={handleFileChange} />
                        </label>
                    </div>
                    <button className='btn' type='submit' disabled={isLoading ? true : false}>Generate</button>
                </form>
                {isLoading ? <div class="loader">
                    <div class="load-inner load-one"></div>
                    <div class="load-inner load-two"></div>
                    <div class="load-inner load-three"></div>
                    <div class="load-inner load-four"></div>
                    <span class="text">Analyzing...</span>
                </div> : ''}

            </div>
        </section>
    )
}
