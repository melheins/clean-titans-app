# Clean Titans

## Overview
An app to teach kids responsibility.  Kids earn points by completing daily tasks. Points are awarded when parent confirms tasks are complete
Children can redeem rewards for comic books or parent approved rewards such as ice cream, tv time.

## App Specifications
[Available for viewing on heroku, via backplane.io](https://determined-prince-22.backplaneapp.io/)
https://tranquil-lowlands-50596.herokuapp.com/

## Authors
* [Valarie Regas](https://github.com/ValarieR)
* [Melanie Heins](https://github.com/melheins)
* [Kathy Satterlee](https://github.com/ksatter) 

## Known Issues
*

## Technologies used
NPM Packages Used
*   [body-parser](https://www.npmjs.com/package/body-parser)
*   [dotenv](https://www.npmjs.com/package/dotenv)
*   [express](https://www.npmjs.com/package/express)
*   [express-handlebars](https://www.npmjs.com/package/express-handlebars)
*   [firebase](https://www.npmjs.com/package/firebase)
*   [method-override](https://www.npmjs.com/package/method-override)
*   [mysql](https://www.npmjs.com/package/mysql)
*   [mysql2](https://www.npmjs.com/package/mysql2)
*   [path](https://www.npmjs.com/package/path)
*   [sequelize](https://www.npmjs.com/package/sequelize)

Additional Programs
*   [Backplane.io](https://www.backplane.io/)
*   [Docker](https://www.docker.com/)

Project Management
*   [Google Drive](https://drive.google.com/)
*   [wireframe.cc](https://wireframe.cc/)
*   [Kanbanchi Gdrive App](https://www.kanbanchi.com/) - Project Plan, Card Sort


## Installation

If you would like to install and run this project locally, first clone this repository as follows:

	git clone git@github.com:melheins/clean-titans-app.git

Subsequently, install the necessary dependencies.

	cd clean-titans-app
	npm install

Run the Node.js server.

	node server.js

Finally, access the app within your browser on the default port of `3030` with: `localhost:3030`.

## Future Work

Future work on this project includes but is not limited to the following:

1) Allow Parents to add missions (chores).
2) Allow Parents to add rewards.
3) Allow Parents to assign specific missions to children.


## Docker Notes
docker build -t kvm/clean-titans .

$ docker run -p 49160:8080 -it -v $(pwd):/usr/src/app kvm/clean-titans
