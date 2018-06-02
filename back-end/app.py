import os, errno
from flask import Flask, make_response
from flask import request
from flask_cors import CORS
from werkzeug.utils import secure_filename
import json
import classify

UPLOAD_FOLDER = '/uploads'

app = Flask(__name__)
CORS(app)

@app.route('/upload', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
        f = request.files['file']
        filename = secure_filename(f.filename)
        filename_without_extension = filename[:len(filename)-4]

        dir_path = os.path.join(app.root_path+UPLOAD_FOLDER, filename_without_extension)

        if not os.path.exists(dir_path):
            os.makedirs(dir_path)

        if f.save(os.path.join(dir_path, filename)):
            return '0'
        else:
            return filename[:len(filename)-4]
            #just for a single image keep in mind



@app.route('/process/<path:dir_path>', methods=['GET', 'POST'])
def process_image(dir_path):

    if request.method == 'POST':
        os_dir_path = os.path.join(app.root_path+UPLOAD_FOLDER, dir_path)

        response = []

        for root, dirs, files in os.walk(os_dir_path):
            for file in files:
                tmp=[]
                tmp.append(file)
                if classify.recognize(os_dir_path+'/'+file):
                    tmp.append(1)
                else:
                    tmp.append(0)
                    
                response.append(tmp)
                print(json.dumps(response))

        return json.dumps(response)

        #
        # if classify.recognize(os.path.join(dir_path)):
        #     return '1'
        # else:
        #     return '0'
