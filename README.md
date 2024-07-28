# NodeJs Server that connects to MongoDb Template

## About Repository

This template repository is designed to simplify the setup of a basic Node.js server that connects to MongoDb. 

It installs the following dependencies:
* cors 
* dotenv
* express
* helmet
* morgan
* mongoose

Dev dependencies:
* husky
* jest
* nodemon
* prettier
* pretty-quick
* supertest

## Required software:
* Git client
* Latest stable version of NodeJs
* MongoDB Database

## How to set up the project

Setting up a new git project:
* Clone the repo:
* Remove the repo origin
* Add a new repo origin
* Update the `package.json`

Setting up an existing git project:
* Remove the repo origin
* Add a new repo origin
* Pull the remote origin
* Update the `package.json`

## How to run the project

### NB!
Please make sure you have a running instance of Mongodb.

* Step 1:

Switch to the projects root directory and run `npm install` to install the required packages.

* Step 2:

Set environment variables:

```
PORT=X
MONGO_URL=X
```

* Step 3:

Run `npm  run dev` to start-up the server and access the end-points on:

```
http://localhost:{PORT}
```
