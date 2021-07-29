from __future__ import division, print_function
from flask import Flask, render_template, request, redirect
from flask_cors import CORS
from chatbot import chatbot
import os
import numpy as np
from keras.applications.imagenet_utils import preprocess_input, decode_predictions
from tensorflow.keras.applications.vgg16 import VGG16
from keras.models import load_model
import tensorflow as tf
from keras.preprocessing import image
from werkzeug.utils import secure_filename

app = Flask(__name__)

CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
app.static_folder = 'static'


@app.route('/button/', methods=['POST'])
def button():
    print('i get it')
    return render_template('index.html')
    
@app.route("/get")
def get_bot_response():
    userText = request.args.get('msg')
    return str(chatbot.get_response(userText))

"""
@app.route('/', methods=['GET'])
def homeTest():
    return render_template('test.html')
"""

@app.route('/test/', methods=['POST'])
def index():
    return render_template('test.html')


MODEL_PATH = 'modelOur1.h5'
#model = tf.keras.models.load_model(MODEL_PATH) load_model('modelOur.h5')
model = load_model(MODEL_PATH)
model.make_predict_function()        


def model_predict(img_path, model):
    #model = VGG16(weights='imagenet', include_top=True)
    img = image.load_img(img_path, target_size=(224, 224))
    x = image.img_to_array(img)
    x = np.true_divide(x, 255)
    x = np.expand_dims(x, axis=0)
    x = preprocess_input(x, mode='caffe')
    preds = model.predict(x)
    return preds

@app.route('/predict', methods=['GET', 'POST'])
def upload():
    if request.method == 'POST':
        f = request.files['file']
        basepath = os.path.dirname(__file__)
        file_path = os.path.join(basepath, 'uploads', secure_filename(f.filename))
        print('************')
        print(f.filename)
        print('************')
        f.save(file_path)

        preds =model_predict(file_path, model)

        pred_class = decode_predictions(preds, top=1) 
        result = str(pred_class[0][0][1])              
        return result
    return None

if __name__ == "__main__":
    app.run() 