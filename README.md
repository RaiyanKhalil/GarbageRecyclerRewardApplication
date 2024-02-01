# **CSIS 4495-001 – Applied Research**

# **Final Report**

# Incentivizing Garbage Recycling and Collection in Dhaka

Submitted to:

**Bambang A.B. Sarif**

Submitted by:

**Raiyan Khalil Shuvo - 300358160**

# Table of Contents

[**Introduction** 4](#_Toc152210176)

[**Domain Introduction** 4](#_Toc152210177)

[**Background Overview** 4](#_Toc152210178)

[**Problem Statement** 4](#_Toc152210179)

[**Literature Review** 4](#_Toc152210180)

[**Hypotheses and Assumptions** 5](#_Toc152210181)

[**Proposed Research Project** 5](#_Toc152210182)

[**Research Design and Objectives** 5](#_Toc152210183)

[**Methodology** 5](#_Toc152210184)

[**Technologies Used** 5](#_Toc152210185)

[**Expected Results** 6](#_Toc152210186)

[**Project Planning and Timeline** 6](#_Toc152210187)

[**Project Planning** 6](#_Toc152210188)

[**Project Timeline** 6](#_Toc152210189)

[**Team Responsibilities** 6](#_Toc152210190)

[**Implemented Features** 7](#_Toc152210191)

[**Mobile Application** 7](#_Toc152210192)

[**Sign In & Home Screen** 7](#_Toc152210193)

[**Electricity Monitoring** 7](#_Toc152210194)

[**Waste Monitoring and Garbage Recycler** 8](#_Toc152210195)

[**Community** 8](#_Toc152210196)

[**Bills & Payment** 8](#_Toc152210197)

[**Express Backend Server & MongoDB** 9](#_Toc152210198)

[**Flask Image Processing Server** 10](#_Toc152210199)

[**Custom Image Classification Model** 10](#_Toc152210200)

[**LESSONS LEARNED AND FUTURE WORK** 12](#_Toc152210201)

[**CONCLUDING REMARKS** 12](#_Toc152210202)

[**References** 12](#_Toc152210203)

[**Acknowledgments** 12](#_Toc152210204)

[**References** 12](#_Toc152210205)

[**APPENDIX** 13](#_Toc152210206)

[**APPENDIX A: INSTALLATION GUIDE** 13](#_Toc152210207)

[**Expo Mobile Application** 13](#_Toc152210208)

[**Express Backend Server** 13](#_Toc152210209)

[**Flask Image Classification Server** 13](#_Toc152210210)

[**APPENDIX B: USER GUIDE** 13](#_Toc152210211)

[**Sigin & Home** 13](#_Toc152210212)

[**Electricity** 14](#_Toc152210213)

[**Waste** 15](#_Toc152210214)

[**Community** 16](#_Toc152210215)

[**Bills** 16](#_Toc152210216)

[**APPENDIX C: API** 17](#_Toc152210217)

[**APPENDIX D: CODE EXPLANATION** 17](#_Toc152210218)

[**Flask Server** 17](#_Toc152210219)

[**Express Backend Server** 18](#_Toc152210220)

[**Image Classification Model** 20](#_Toc152210221)

[**Mobile Application** 26](#_Toc152210222)

# **Introduction**

**Domain Introduction**

Climate change is as real as it was when it was first introduced in 1938, the only difference is we can see the impact of climate change firsthand with our own eyes. There are severe disasters happening all around us from record-breaking temperatures across the globe to extreme drought, deadly hurricanes, and harsh winter. Unless we wake up and bring significant changes in our lifestyle, it will only keep getting worse. We are at the risk of losing our biodiversity, having food and water scarcity, to rising sea levels, which will cause massive migration in this century.

Although a lot of things have to be done to delay/fix climate change in this research project, we are going to focus on a proof-of-concept solution to incentivize garbage recycling and collection from the home in the [7th largest city](https://www.sciencefocus.com/planet-earth/in-pictures-the-largest-cities-in-the-world) in the world Dhaka.

**Background Overview**

Dhaka is a bustling city with an estimated population of over 20.2 million people, and every day, as more people migrate to Dhaka, they also bring with them their garbage. Garbage is poorly disposed of there, unlike the developed countries. Which clogs up the drainage systems in the city causing floods during the rainy season. This garbage then ends up in the rivers, seas, and ultimately in the ocean. Which causes water pollution and destroys the biodiversity of our waters. We can already find microplastics in our everyday food, which will cause unforeseen health issues in the future. If we can start small just by simply collecting & recycling our garbage in a proper and efficient way, we will have a major impact on how we shape the future of our world.

**Problem Statement**

Dhaka produces around 5,000 tonnes of waste per day, and less than half of it is formally collected, according to this article in [ejatlas](https://ejatlas.org/print/waste-worries-and-precarious-informal-recycling-in-dhaka-bangladesh#:~:text=Description%3A,than%20half%20is%20formally%20collected.). This leaves a lot of garbage that is unaccounted for and is polluting the environment in the city. We aim to find a process to collect those wastes which are correctly sorted. This will reduce the need to sort garbage at facilities before it is processed. We aim to incentivize homes, communities, and businesses to recycle garbage properly and provide a monetary value based on recyclability using Image Processing to identify garbage and its value. Once the garbage has been processed at one of the depots, they will get an amount debited to their bank account.

### **Literature Review**

In our research, we have found almost half of the garbage produced every day is unaccounted for. We have also found that the city of Dhaka currently doesn't have an efficient system to handle waste. From various academic research papers, we can find the extent of this problem in the city. Pictures are provided below for context.

![](RackMultipart20240201-1-vj5uje_html_b45b757eb8884ecf.jpg) ![](RackMultipart20240201-1-vj5uje_html_3723cfef2ab9145d.jpg)

### **Hypotheses and Assumptions**

- We are going to assume that the garbage classifier model in our project will be able to correctly identify various types of trash with 70% accuracy initially and provide a calculation of how much money the user will receive for their trash.
- We are also going to assume that homes, communities, and businesses will use the application, and there is already a system in place to handle the trash at depots.

# **Proposed Research Project**

### **Research Design and Objectives**

The overall research will be to find how to build an image recognition system that can verify different types of garbage. What technique to use to build the model and how to deploy it in the application. Also, what type backends are required and what to use to build the mobile application.

The main objectives are:

- To build a functional proof-of-concept mobile application.
- To build backend to process data sent from the application.
- To deploy the backend in Cloud Infrastructure.
- To train a Garbage Classifier Model using Convolutional Neural Network (CNN) with 70% accuracy.

### **Methodology**

- We are going to collect data mainly images from various sources such as Kaggle. The primary reason behind using Kaggle we can get a lot of data from a single source, and we don't have to go out and take pictures for our model.
- We are going to start with a small sample and run the CNN algorithm to see if the model can recognize them.
- We are using CNN because it reduces the high dimensionality of images without losing their information.

### **Technologies Used**

Technologies that are going to be used are:

- Android/IOS application built using React-Native.
- A Linux distro such as Ubuntu/CentOS will be used to host the backend services.
- Using Google Cloud Platform services to train the Garbage Classifier Model using a Convolutional Nural Network algorithm.
- Firebase/MongoDB to store client information securely.
- JavaScript, Python, HTML, CSS, and relevant frameworks will be used to build the application.
- A payment gateway for secure transactions.

### **Expected Results**

A mobile application to identify garbage and its type and provide a monetary value against it to the user. We want to prove a concept which can lead further research on the topic and how to scale to have an impact on waste pollution. Users will also get paid in monetary value for any garbage they recycle through our application.

# **Project Planning and Timeline**

### **Project Planning**

We going to follow Scrum methodology throughout the project where the client, development team, and project managers will work with each other.

### **Project Timeline**

A Gantt chart of the timeline is provided below.

![](RackMultipart20240201-1-vj5uje_html_d441d121fb18e1dd.gif)

### **Team Responsibilities**

- Raiyan Khalil Shuvo is solely responsible for developing the mobile application and training the garbage image classification mode.

#

# **Implemented Features**

The following features have been implemented for this project:

1. Mobile Application
  1. Sign In & Home Screen
  2. Electricity Monitoring
  3. Waste Monitoring & Garbage Recycler
  4. Community
  5. Billings & Payment
2. Express Backend Server & MongoDB
3. Flask Image Processing Backend Server
4. Custom Image Classification Model

# **Mobile Application**

## **Sign In & Home Screen**

Users will initially be taken to sign in page for them to login, after the first login app state will change and users will be redirected to home screen. The app state will persist even if the user closes application as it is stored locally. App state will only change when user logout of the application.

In the home screen user will be able to see multiple cards with data from the range utilities of electricity, water, gas, and wastes. They will also be able to see other cards with graphs of their usage. Upon clicking on a card, they will be navigated to different screen with different information.

Users can also see bottom navigation with which they can navigate to screens of Home, Community, Bills.

## **Electricity Monitoring**

Users in this view can get detailed information of their usage and will also be able to see the updated bill for that month. Users can also see a list of their added appliances and last seven days usage in a bar chart whose data is being retrieved with a GET request from an express backend server, which is stored in MongoDB.

Users can add new appliances "Add" floating action button. Which will display a modal with a form which has the following fields:

1. Appliance Name
2. Power Rating

When the user clicks submit a POST request is sent to the express server, which then creates a new appliance and saves the data in MongoDB. The appliance list is then updated automatically with new appliances.

## **Waste Monitoring and Garbage Recycler**

In this view users will be able to see their total returns in Plastic, Glass, Metal and Organic in four small cards. The users can also see their last approved return, how much was return and how much they received back in digital currency.

When the user clicks the "Camera" floating action button a camera view is open where when user take a picture of a garbage such as plastic bottle, the image is then sent using a POST request to the Flask Image Processing Backend Server, which then processes the image and sends a plastic classification which is then displayed over the image.

## **Community**

In this view the user can see a map with markers of the garbage's pinned via other users in the community. The users can also a list of top contributors as bubbles and a list with their names and messages and a link to their profiles and contributions to the community. When a pin is made a user can fulfill the request by recycling the garbage or the city will take care of it.

## **Bills & Payment**

In this view the users presented with a list of their monthly utility bills from the city. When clicked on the bill card it will show a detailed view of the bill. The user can also pay their bills using any payment gateway such as Stripe, PayPal, or any local payment gateways.

# **Express Backend Server & MongoDB**

The mobile application is paired with a backend server developed using "Express.JS" server. This backend server is primarily used to consume REST APIs from the mobile application. This server contains the data schema for MongoDB using mongoose. This server is responsible for creating, reading, updating, and deleting data from MongoDB.

MongoDB is a NoSQL database, which stores all the data of the application, from appliances, wastes, community, users, and bills. MongoDB can be run locally, or Mongo Atlas can be to store the data in cloud. The APIs and the model schema are provided below:

1. GET Request: [http://192.168.1.80:3000/appliances](http://192.168.1.80:3000/appliances)
2. POST Request: [http://192.168.1.80:3000/appliances](http://192.168.1.80:3000/appliances)

Model Schema for MongoDB:

{

    applianceName: {

      type: String,

      required: true,

      trim: true,

    },

    powerRatingWatt: {

      type: Number,

      required: true,

    },

    dailyUsage: [

            {

            date: {

                type: Date,

                default: Date.now

            },

            usageKWh: {

                type: Number,

                required: true

            }

        }

    ],

}

The ip address the api will be the host ip address if in the same network in development environment.

# **Flask Image Processing Server**

This is a Flask Image Processing Server primarily developed using Python. This server receives an image from the mobile application using a POST a request. After the server receives an image, it then preprocesses and resizes the image to the image classification model requirements. It then classifies the image sends a label back as a response to the mobile application. The API is provided below:

- http://192.168.1.80/classify

# **Custom Image Classification Model**

A custom image classification model is created using TensorFlow, NumPy and other technologies. I took a garbage image dataset with 12 different types of garbage. The following steps are used to create the custom model:

- TensorFlow, NumPy and other packages are first downloaded and imported.
- Images are then fed from the data folder which contains all the image and resized and batched.
- Images are then dived in 80:20 ratio for training and testing.
- Images are then tuned using AUTOTUNE, normalized using normalization layer command, and augmented using data augmentation.
- Images are then processed to take from multiple axis.
- Convolutional Neural Network Layers are added, I am using seven layer to make the model.
- Then model is compiled using "adam" optimizer with accuracy metrics enabled
- A model summary is the then generated which is given below:

Model: "sequential\_18"

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Layer (type) Output Shape Param #

=================================================================

sequential\_17 (Sequential) (None, 180, 180, 3) 0

rescaling\_20 (Rescaling) (None, 180, 180, 3) 0

conv2d\_212 (Conv2D) (None, 180, 180, 16) 448

conv2d\_213 (Conv2D) (None, 180, 180, 16) 2320

max\_pooling2d\_104 (MaxPool (None, 90, 90, 16) 0

ing2D)

conv2d\_214 (Conv2D) (None, 90, 90, 32) 4640

conv2d\_215 (Conv2D) (None, 90, 90, 32) 9248

max\_pooling2d\_105 (MaxPool (None, 45, 45, 32) 0

ing2D)

conv2d\_216 (Conv2D) (None, 45, 45, 64) 18496

conv2d\_217 (Conv2D) (None, 45, 45, 64) 36928

...

Total params: 21000348 (80.11 MB)

Trainable params: 21000348 (80.11 MB)

Non-trainable params: 0 (0.00 Byte)

- Then I trained the model using 15 epochs
- A Training and Validation chart is generated for Accuracy and Loss, which is given below:

![](RackMultipart20240201-1-vj5uje_html_17615edc273bc6d3.png)

- Model is then saved as "model.h5" format, which is then fed to the Flask Server to do image classification.

# **LESSONS LEARNED AND FUTURE WORK**

The lessons that I have learned is that developing and Machine Learning centric application is best using lower-level languages such Python, C++ and more. When using higher level languages such JavaScript and libraries like Expo and React-Native we are dependent on the packages provided by the developers. Thus, I was not able to run the image classification model in device using the mobile application. Even though using libraries has a high turnover rate it becomes a block when developing using AI or Machine Learning applications. These types of libraries are perfect to make simple applications which solely dependent on REST APIs.

The future work is given below:

- Fix Camera Module UI
- Implement Payment method.
- Add the Gas and Water Module
- Implement Firebase Authentication for secure login and registration.
- Implement the Top Contributors in the Community Module

# **CONCLUDING REMARKS**

This is a proof-of-concept project whose primary purpose was to develop and run custom image classification model in both IOS and Android devices. I as able to successfully develop and demonstrate the proof-of-concept application.

# **References**

### **Acknowledgments**

- Douglas College has provided us with technical expertise and support to complete the project.

###

### **References**

- [https://www.sciencefocus.com/planet-earth/in-pictures-the-largest-cities-in-the-world](https://www.sciencefocus.com/planet-earth/in-pictures-the-largest-cities-in-the-world)
- [https://ejatlas.org/print/waste-worries-and-precarious-informal-recycling-in-dhaka-bangladesh#:~:text=Description%3A,than%20half%20is%20formally%20collected](https://ejatlas.org/print/waste-worries-and-precarious-informal-recycling-in-dhaka-bangladesh#:~:text=Description%3A,than%20half%20is%20formally%20collected).
- [https://expo.dev/](https://expo.dev/)
- [https://expressjs.com/](https://expressjs.com/)
- [https://flask.palletsprojects.com/en/3.0.x/](https://flask.palletsprojects.com/en/3.0.x/)
- [https://www.kaggle.com/datasets/mostafaabla/garbage-classification](https://www.kaggle.com/datasets/mostafaabla/garbage-classification)
- https://www.tensorflow.org/tutorials/images/classification

# **APPENDIX**

## **APPENDIX A: INSTALLATION GUIDE**

### **Expo Mobile Application**

To install the mobile application, navigate to the project folder run "npm install" to download the node modules which has dependencies and packages for the application to run. Then user can install, and app called "Expo Go" for their Iphone or Android devices. The user then needs to run "expo start" command which will then start to build the application. After the application is built it will give a QR code which can be scanned through the Expo Go app and get a demonstration on their physical devices or use an emulator to run the application. For the application to function properly the user must change the API endpoints to local devices IP address followed the port number of the backend servers.

### **Express Backend Server**

To run the express backend server user must navigate to its project folder run "npm install" and then run "npm run start" to start the application. This server runs on port number 3000.

### **Flask Image Classification Server**

To run the flask image classification server the user must navigate to project folder and run "python app.py" and it will start the flask server. This server runs on port number 5000.

## **APPENDIX B: USER GUIDE**

### **Sigin & Home**

User will login using the username "Raiyan" and password "12345". Then will navigate to Electricity module. Screenshots are given below:

![](RackMultipart20240201-1-vj5uje_html_56d7ae89fdeed5bc.png) ![](RackMultipart20240201-1-vj5uje_html_900a6bd384081129.png) ![](RackMultipart20240201-1-vj5uje_html_13d15b4933bf67b6.png)

### **Electricity**

In this module users can view and create new appliances to monitor. User can click on Add FAB and create new appliances by filling the form. Then the appliance is listed in the appliance list.

![](RackMultipart20240201-1-vj5uje_html_e6f13772413f1b58.png) ![](RackMultipart20240201-1-vj5uje_html_c6f8fe1c2791c224.png) ![](RackMultipart20240201-1-vj5uje_html_87401b447658e525.png)

### **Waste**

In this module user can keep track of their garbage classifications. The user will click on "Camera" FAB which will take them to Camera module where they will take a picture which will then send the image to the flask image classification server and will receive the classification from the server as a response and display it over the image.

![](RackMultipart20240201-1-vj5uje_html_1ece1af63790f670.png) ![](RackMultipart20240201-1-vj5uje_html_5ffc55dc63cfef86.jpg) ![](RackMultipart20240201-1-vj5uje_html_22c03762eab1eed0.jpg)

### **Community**

In this module the user can see a map and the top contributors

![](RackMultipart20240201-1-vj5uje_html_a6770ea3630ee5e4.png)

### **Bills**

In this module the user can see the monthly utility bills.

![](RackMultipart20240201-1-vj5uje_html_eb8e7de699ccf886.png)

## **APPENDIX C: API**

The APIs are provided below:

- GET: http://192.168.1.80:3000/appliances
- POST: http://192.168.1.80:3000/appliances
- POST: http://192.168.1.80:5000/classify

## **APPENDIX D: CODE EXPLANATION**

### **Flask Server**

![](RackMultipart20240201-1-vj5uje_html_ec619e49a37c8916.png)

### **Express Backend Server**

![](RackMultipart20240201-1-vj5uje_html_167cf7e7f34f3c7.png)

![](RackMultipart20240201-1-vj5uje_html_3c040d54e4fd87b0.png)

![](RackMultipart20240201-1-vj5uje_html_6d1d0d9e266edb64.png)

### **Image Classification Model**

![](RackMultipart20240201-1-vj5uje_html_c8269010f22e7226.png)

![](RackMultipart20240201-1-vj5uje_html_49eb232cc73d3f34.png) ![](RackMultipart20240201-1-vj5uje_html_502bce4b74059d0b.png) ![](RackMultipart20240201-1-vj5uje_html_183fab0112c61798.png) ![](RackMultipart20240201-1-vj5uje_html_2e30c6eb2035e0ee.png) ![](RackMultipart20240201-1-vj5uje_html_ecdf009b3634f3f.png) ![](RackMultipart20240201-1-vj5uje_html_4d8f2f91ef040490.png)

­ ![](RackMultipart20240201-1-vj5uje_html_60fe176e9d8f1999.png) ![](RackMultipart20240201-1-vj5uje_html_2c01e506b3fd51f3.png)

### **Mobile Application**

Camera Screen

![](RackMultipart20240201-1-vj5uje_html_5a4287e2e2a16c76.png)

![](RackMultipart20240201-1-vj5uje_html_5bb08afa7d3d9c4e.png)

Electricity Screen ![](RackMultipart20240201-1-vj5uje_html_6e690dcb68cfdfa.png) ![](RackMultipart20240201-1-vj5uje_html_86ec8b8d303a70dc.png) ![](RackMultipart20240201-1-vj5uje_html_6f57be98a7cc7a70.png)

PopupFragment

![](RackMultipart20240201-1-vj5uje_html_6308339df548aaf9.png) ![](RackMultipart20240201-1-vj5uje_html_66c3029dc8528d5c.png)

Community Screen

![](RackMultipart20240201-1-vj5uje_html_5714491d186c5f78.png)

![](RackMultipart20240201-1-vj5uje_html_5a0fdae164777324.png)

Bill Screen

![](RackMultipart20240201-1-vj5uje_html_10508cda8dd3a963.png)

### **UserName: Raiyan**
### **UserPass: 12345**
