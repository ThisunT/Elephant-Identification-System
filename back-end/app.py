import os, errno
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
        filename_without_extension = filename[:len(filename)-3]

        dir_path = os.path.join(app.root_path+UPLOAD_FOLDER, filename_without_extension)

        if not os.path.exists(dir_path):
            os.makedirs(dir_path)

            f.save(os.path.join(dir_path, filename))


        if classify.recognize(os.path.join(dir_path,filename)):
            return '1'
        else:
            return '0'