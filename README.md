# Todo App

Todo App is a platform built in MERN stack for keep in track of daily to daily tasks.

## Installation
Install [Node](https://nodejs.org/en/) & [MySql](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/)

##Database File
Database Backup file can be found in backend/database_file folder. The file can be imported in the mySql database.


## Usage

After installation of node, run the following commands in terminal

    - cd todo-application && cd backend && npm install
    
    - cd todo-application && cd frontend && npm install

##Database Connection

    - create .env file in backend folder and add the following environment variables

      DB_HOST={YOUR_LOCALHOST_URL}
      DB_USER={YOUR_DB_USERNAME}
      DB_PASSWORD={YOUR_DB_PASSWORD}
      DB_DATABASE={YOUR_DB_NAME}

## Test
Run the following commands to run test cases
    - npm test

Both in backend and frontend folder

## Run Server
Run the following commands to run server
- cd backend && npm start

## Run Client
Run the following commands to start client
- cd frontend && npm start



## Architecture
The backend has been developed by following the MVC Architecture. MVC is an architectural pattern consisting of three parts: Model, View, Controller. Model: Handles data logic. View: It displays the information from the model to the user. Controller: It controls the data flow into a model object and updates the view whenever data changes.
Once the client app is ready, Client will accept data from Server, and server will send data back to the client.

##Video
[![Watch the video](https://i.imgur.com/vKb2F1B.png)](https://drive.google.com/file/d/1yMutaEjOuSwU_CRA7wCYjtIhhvbEDhIE/view?usp=sharing)



## Tools and Technologies
    - Node 14.
    - Docker
    - React
    - MySql

