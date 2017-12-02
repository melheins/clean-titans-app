# Clean Titans

## Overview
An app to teach kids responsibility.  Kids earn points by completing daily tasks. Points are awarded when parent confirms tasks are complete
Children can redeem rewards for comic books or parent approved rewards such as ice cream, tv time.

## App Specifications
https://tranquil-lowlands-50596.herokuapp.com/ | https://git.heroku.com/tranquil-lowlands-50596.git
...

## Authors
* [Valarie Regas](https://github.com/ValarieR)
* [Melanie Heins](https://github.com/melheins)
* [Kathy Satterlee](https://github.com/ksatter) 

## Known Issues
*

## Technologies used
NPM Packages Used
*   body-parser
*   dotenv
*   express
*   express-handlebars
*   firebase
*   method-override
*   mysql
*   mysql2
*   path
*   sequelize

Project Management
*   Google Drive
*   wireframe.cc
*   Kanbanchi Gdrive App - Project Plan, Card Sort




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
