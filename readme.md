# Node Settings Saver

This Node app is meant to be run with a website for saving unsecure settings which will change for all users.

## Primary Feature

This app will accept a JSON request sent on the route /save and create or overwrite the variables.json file found in data/variables.json.
 
### Tech

Node Settings Saver uses these packages and technologies to work for you:

* [npm] - A package manager for JavaScript
* [node.js] - A JavaScript runtime built on Chrome's V8 JavaScript engine
* [Express] - A minimal and flexible Node.js web application framework
* [body-parser] - A Node.js body parsing middleware

### Installing

Download the repo then from the directory

```sh
$ npm install 
```

Default run command

```sh
$ npm run start
```


For logging information to be shown

```sh
$ npm run startlogging
```

### Docker

The provided dockerfile can create a docker container for this node app, it will run on a alpine node server. 

Example commands to build and run the Docker image.

```sh
$ docker build -t nodesettingssaver .
$ docker run nodesettingssaver
```

### Todos

 - Opening up the save path to an enviornment variable for future uses

License
----

ISC

[//]: #
   [npm]: <https://www.npmjs.com/>
   [node.js]: <https://nodejs.org>
   [express]: <https://expressjs.com>
   [body-parser]: <https://github.com/expressjs/body-parser>

