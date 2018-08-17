import os, errno
from flask import Flask, make_response, send_file, send_from_directory
from flask import request
from flask_cors import CORS
from werkzeug.utils import secure_filename
import json
import classify
import resnet

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
            #just for a single image



@app.route('/process/<string:method>/<path:dir_path>', methods=['GET', 'POST'])
def process_image(method,dir_path):

    if request.method == 'POST':
        os_dir_path = os.path.join(app.root_path+UPLOAD_FOLDER, dir_path)

        response = []

        for root, dirs, files in os.walk(os_dir_path):
            for file in files:
                tmp=[]
                tmp.append(file)

                if method == "count":
                    tmp.append(classify.count(os_dir_path+'/'+file))

                elif method == "inception":
                    if classify.inception(os_dir_path+'/'+file):
                        tmp.append(1)
                    else:
                        tmp.append(0)
                elif method == "mobilenet":
                    if classify.mobileNet(os_dir_path+'/'+file):
                        tmp.append(1)
                    else:
                        tmp.append(0)
                elif method == "resnet50":
                    if classify.resNet50(os_dir_path+'/'+file):
                        tmp.append(1)
                    else:
                        tmp.append(0)
                    
                response.append(tmp)

        return json.dumps(response)

@app.route('/getImage/<path:dir_path>/<string:pid>',methods=['GET'])
def get_images(dir_path,pid):
    os_img_path = os.path.join(app.root_path + UPLOAD_FOLDER, dir_path + '/')
    return send_from_directory(os_img_path,pid)



