from retraining import try_retrain, retrain

def recognize(image_path):
  preds = try_retrain.scan(image_path)
  print(preds)

  if preds[0] == 'elephant':
    return 1
  else:
    return 0

def retrain_network():
    retrain.start_retrain()




