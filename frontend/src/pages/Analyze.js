import React, { useState } from 'react'

export default function Analyze() {
    const [isLoading, setisLoading] = useState(true)
    return (
        <section className='analyze-section' id='analyze'>
            <div className="container">
                <h2 className='title'>Identify deepfake videos</h2>
                <div class="input-container">
                    <label for="images" class="drop-container" id="dropcontainer">
                        <span class="drop-title">Drop video file here</span>
                        or
                        <input type="file" id="images" accept="image/*" required />
                    </label>
                </div>
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
