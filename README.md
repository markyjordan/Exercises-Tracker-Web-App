# Exercises Tracker Web App

## Project Description

A single-page C.R.U.D. web application written with the MERN stack.

### Project Gallery


### Tech Stack

* M:    [MongoDB](https://www.mongodb.com/) - A NoSQL database for storing the collection of exercises.
* E:    [Express.js](https://expressjs.com/) - An open source Node.js web framework to manage client-server interaction.
* R:    [React.js](https://reactjs.org/) - An open source frontend web framework which delivers the single-page web app client experience.
* N:    [Node.js](https://nodejs.org/en/) - An open source JavaScript framework
  used to build the server environment.  

---
## Getting Started with Development

These instructions will help you get a copy of the project running on your local machine for development and testing.

### Prerequisites

* [Node.js](https://nodejs.org/) version 16.0.0 or later.


### Installation

From the command line, navigate to the directory where you want the project to live and copy the source code repository:
```
git clone https://github.com/markyjordan/Exercise-Tracker-Web-App.git
```

Next, navigate to the newly cloned repository and install the project
dependencies. To install the backend dependencies:
```
cd Exercises-Tracker-Web-App/backend-rest
npm install
```

And to install the frontend dependencies:
```
cd ../frontend-react
npm install
```

To start the web application from the `/frontend-react` directory:
```
npm start
```
> **NOTE:** By default, the client application is configured to run on PORT 8000
> and the server application is configured to run on PORT 5005. If you need to 
> configure the apps to run on different PORTs, you can do so from within the
> `.env` files located in both the `/backend-rest` and `/frontend-react` project
> directories.

---
## About this Software

### Author
Mark Jordan

### Version History
See [CHANGELOG.md](CHANGELOG.md).

### License
This project is licensed under the [MIT License](LICENSE).


<br>

[Return to the Top](#exercises-tracker-web-app)
