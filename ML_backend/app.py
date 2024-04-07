from flask import Flask, render_template, request
from tensorflow.keras.models import load_model
import numpy as np
from tensorflow.keras.preprocessing.image import load_img
from tensorflow.keras.applications.vgg16 import preprocess_input
import os
from tensorflow.keras.preprocessing import image
import tensorflow.keras.backend as K
import matplotlib.pyplot as plt
import csv
app = Flask(__name__)

K.clear_session()
model = load_model("./trainedmodel_11class.hdf5", compile=False)
target_img = os.path.join(os.getcwd() , 'static/images')
food_list =  ['beef_tartare','club_sandwich','chocolate_cake','french_fries','fried_rice','ice_cream','lasagna','macarons','omelette','pizza','samosa']

@app.route('/')
def index_view():
    return render_template('index.html')
#Allow files with extension png, jpg and jpeg
ALLOWED_EXT = set(['jpg' , 'jpeg' , 'png'])
def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1] in ALLOWED_EXT
           
# Function to load and prepare the image in right shape
def read_image(filename):
    img = load_img(filename, target_size=(224, 224))
    x = image.img_to_array(img)
    x = np.expand_dims(x, axis=0)
    x = preprocess_input(x)
    return x


def predict_class(model, img, show = True):
    K.clear_session()
    img = image.load_img(img, target_size=(299, 299))
    img = image.img_to_array(img)                    
    img = np.expand_dims(img, axis=0)         
    img = preprocess_input(img)                                      
    pred = model.predict(img)
    index = np.argmin(pred)
    print(index)
    food_list.sort()
    pred_value = food_list[index]
    print(pred_value, index)
    if show:
      plt.imshow(img[0])                           
      plt.axis('off')
      plt.title(pred_value)
      plt.show()
    return pred_value
@app.route('/predict',methods=['GET','POST'])
def predict():
    if request.method == 'POST':
        file = request.files['file']
        if file and allowed_file(file.filename):
            filename = file.filename
            file_path = os.path.join('static/images', filename)
            file.save(file_path)
            pred = predict_class(model, file_path)
            nutrition = ""
            # get the values from the food.csv file by reading the file and search for the predicted Food_item in it
            with open("./food.csv", 'r', newline='', encoding='utf-8') as file:
                reader = csv.DictReader(file)
                for row in reader:
                    if row['Food_Item'] == pred:
                        nutrition = row
                        break
            print(pred, nutrition)
            # return in json format
            # return {"Food": pred, "Nutrition": nutrition}
            return render_template('predict.html', pred = pred, user_image = file_path, nutrition=nutrition)
            #print(pred)
        # if file and allowed_file(file.filename): #Checking file format
        #     filename = file.filename
        #     file_path = os.path.join('static/images', filename)
        #     file.save(file_path)
        #     img = read_image(file_path) #prepressing method
        #     class_prediction=model.predict(img) 
        #     classes_x=np.argmax(class_prediction,axis=1)
        #     if classes_x == 0:
        #       fruit = "Apple"
        #     elif classes_x == 1:
        #       fruit = "Banana"
        #     else:
        #       fruit = "Orange"
        #     #'fruit' , 'prob' . 'user_image' these names we have seen in predict.html.
        #     return render_template('predict.html', fruit = fruit,prob=class_prediction, user_image = file_path)
        # else:
        #     return "Unable to read the file. Please check file extension"

# API For prediction which will have the image file in the body and should return the prediction

@app.route('/predict_api',methods=['POST'])
def predict_api():
    if request.method == 'POST':
        print(request)
        file = request.files['file']
        if file and allowed_file(file.filename):
            filename = file.filename
            file_path = os.path.join('static/images', filename)
            file.save(file_path)
            pred = predict_class(model, file_path)
            nutrition = ""
            # get the values from the food.csv file by reading the file and search for the predicted Food_item in it
            with open("./food.csv", 'r', newline='', encoding='utf-8') as file:
                reader = csv.DictReader(file)
                for row in reader:
                    if row['Food_Item'] == pred:
                        nutrition = row
                        break
            print(pred, nutrition)
            return {"Food": pred, "Nutrition": nutrition}
        
if __name__ == '__main__':
    app.run(debug=True,use_reloader=True, port=8000)