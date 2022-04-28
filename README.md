# Community Soundboard Template

## Table of Contents

- [Description](#description)
- [Screenshots](#screenshots)
- [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Acknowledgements](#acknowledgements)
- [Contacts](#contacts)

## Description

A starter template on the PERN stack for hosting a soundboard for a community. The template utilizes Cloudinary's API for .mp3 hosting. The template has 4 user access levels. Admin, Moderator, Member, and New User. The template has data persistence by using a "deleted" boolean for handling deletes.

## Built With

<a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" height="40px" width="40px" /></a><a href="https://www.heroku.com/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/heroku/heroku-original.svg" height="40px" width="40px" /></a><a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" height="40px" width="40px" /></a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" height="40px" width="40px" /></a><a href="https://material-ui.com/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg" height="40px" width="40px" /></a><a href="https://nodejs.org/en/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" height="40px" width="40px" /></a><a href="https://www.postgresql.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" height="40px" width="40px" /></a><a href="https://reactjs.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" height="40px" width="40px" /></a><a href="https://redux.js.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" height="40px" width="40px" /></a>

## Getting Started

Visit the deployed version of the app on Heroku here:https://community-soundboard.herokuapp.com/ and register an account.

Moderator login:  
Username - Moderator  
Password - 1234  

With the moderator login you can experience the ManageAccess view, and give your account access to the soundboard. Once accounts have access they are able to contribute their own clips to the soundboard by having access to the Add a Clip button.

## Screenshots

![Screenshot](./public/images/LandingPage.png)
![Screenshot](./public/images/Soundboard.png)
![Screenshot](./public/images/UploadModal.png)
![Screenshot](./public/images/DeletedClips.png)
![Screenshot](./public/images/ManageAccess.png)
![Screenshot](./public/images/SelectedUserAccess.png)

### Prerequisites

This version uses React, Redux, Express, Passport, and PostgreSQL (a full list of dependencies can be found in`package.json`).

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

Create a new database called `community_soundboard` and create the tables needed by running SQL statements from the database.sql file.

If you would like to name your database something else, you will need to change `community_soundboard` to the name of your new database in `server/modules/pool.js`.

Directory Structure:

- `src/` contains the React application
- `public/` contains static assets for the client-side
- `build/` after you build the project, contains the transpiled code from `src/` and `public/` that will be viewed on the production site
- `server/` contains the Express App



### Installation

Clone the repository and npm install in the terminal. Then in 2 separate terminals, npm run server in one and npm run client in the other. To upload soundclips you will need to create an account with Cloudinary and put your API keys in your .env file.

## Usage

If you're a new user, register an account to log in. If you're already registered, log in to your existing account.

## Contacts

<a href="https://www.linkedin.com/in/https://www.linkedin.com/in/michael-huso/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" /></a>  <a href="mailto:husomichael@gmail.com"><img src=https://raw.githubusercontent.com/johnturner4004/readme-generator/master/src/components/assets/images/email_me_button_icon_151852.svg /></a>
