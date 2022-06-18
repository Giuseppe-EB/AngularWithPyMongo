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

**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>
