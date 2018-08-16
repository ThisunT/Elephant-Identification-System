from retraining import try_retrain, retrain
import resnet


def count(image_path):
    preds = try_retrain.scan(image_path)

    if preds[0] == 'elephant':
        return 1
    else:
        return 0

def inception(image_path):
    preds = try_retrain.scan(image_path)

    if preds[0] == 'elephant':
        return 1
    else:
        return 0

def mobileNet(image_path):
    preds = try_retrain.scan(image_path)

    if preds[0] == 'elephant':
        return 1
    else:
        return 0

def resNet50(image_path):
    preds = resnet.resNetClassify(image_path)

    if preds[0] == 'elephant':
        return 1
    else:
        return 0


def retrain_network():
    retrain.start_retrain()

