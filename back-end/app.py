import os
from flask import Flask, make_response
from flask import request
from flask_cors import CORS
from werkzeug.utils import secure_filename
import classify

UPLOAD_FOLDER = '/uploads'

app = Flask(__name__)
CORS(app)

@app.route('/upload', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
        f = request.files['file']
        filename = secure_filename(f.filename)
        f.save(os.path.join(app.root_path+UPLOAD_FOLDER, filename))
        if classify.recognize(f.filename):
            return '1'
        else:
            return '0'