from flask import Flask, request, jsonify
# from werkzeug.utils import secure_filename
import os
# import tensorflow as tf
# from PIL import Image
# import numpy as np

app = Flask(__name__)

# Define the directory to store uploaded videos
UPLOAD_FOLDER = 'uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Load your machine learning model
# model = tf.keras.models.load_model('your_model_path')

# Define allowed video extensions
ALLOWED_EXTENSIONS = {'mp4', 'avi', 'mov'}

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route("/")
def index():
    return jsonify(message="ha done bhai")

@app.route("/upload", methods=['GET','POST'])
def upload_file():
    if 'videoFile' not in request.files:
        return jsonify({'error': 'No file part'})
    
    video_File = request.files['videoFile']
    
    if video_File.filename == '':
        return jsonify({'error': 'No selected file'})
    
    if video_File and allowed_file(video_File.filename):
        # filename = secure_filename(file.filename)
        # file_Path = os.path.join(app.config['UPLOAD_FOLDER'], video_File.filename)
        video_File.save('uploads/'+video_File.filename)
        # video_File.save(file_Path)
        
        # Process the video file using your ML model
        # prediction = process_video(file_path)
        
        # Return prediction as response
        # return jsonify({'prediction': prediction})
        return 'File uploaded successfully', 200
    else:
        return jsonify({'error': 'Invalid file format'})

# def process_video(file_path):
    # Placeholder function for processing video with your ML model
    # Replace this with your actual ML model prediction logic
    # For example, if you're doing image classification:
    # prediction = model.predict(np.expand_dims(image, axis=0))
    # Assuming your model outputs a label or class, extract it
    # predicted_class = np.argmax(prediction)
    # return predicted_class