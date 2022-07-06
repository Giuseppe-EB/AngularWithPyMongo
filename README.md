# Template
## Angular frontend with pyMongo and flask backend 


This project is a template with a basic UI dashboard developed with Angular and a linked
backend server developed with PyMongo and Flask.

##### Resources:

- [Angular](https://angular.io/docs)
- [PyMongo](https://pymongo.readthedocs.io/en/stable/)
- [Flask](https://flask.palletsprojects.com/en/2.1.x/)

## Features

- Basic Dashboard admin control
- Backend server with basic user services
- Docker enviroments config

Install app locally or run docker commands to build quickly a development environment

## Tech

Used open source projects to work properly:

- [AngularJS] - HTML enhanced for web apps!
- [node.js] - evented I/O for the backend


## Local Installation
 Requires: 
 - [Node.js](https://nodejs.org/) v10+ to run.
 - [AngularJS]
 - Python3
 - [PyMongo](https://pymongo.readthedocs.io/en/stable/)
 - [Flask](https://flask.palletsprojects.com/en/2.1.x/)
 - see requirements.txt files to look about pip dependencies 
 

#### client:

```sh
cd client
npm install
npm start
```

For production environments...

```sh
npm install --production
NODE_ENV=production node app
```

#### server:

```sh
pip install --upgrade pip
pip install -r requirements.txt
python3 -u -m  flask run --host=0.0.0.0
```

## Docker

The Template is very easy to install and deploy in a Docker container.


```sh
cd my-ap
docker-compose up -d --build
```

This will create the needed images and pull in the necessary dependencies.
Be sure to swap out `${package.json.version}` with the latest
versions.

Once done, run the Docker image and map the port to whatever you wish on
your host.

change the docker-compose environments varibales according to your db name

## License

MIT

**Apache License 2.0**


   
   [node.js]: <http://nodejs.org>
   [AngularJS]: <http://angularjs.org>
