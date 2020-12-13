# Budget-Tracker

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
  
  ## Description

  > This Application was created using [PWA](https://web.dev/progressive-web-apps/), [Cached-Storage](https://developer.mozilla.org/en-US/docs/Glossary/Cache), [Service-Worker.js](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorker), and [Manifest.js](https://developer.mozilla.org/en-US/docs/Web/Manifest)functionality. This functionality combined allows for a _downloadable_ application which tracks both Offline and Online User Interaction for tracking/graphing the user's budget.

  > EX: This PWA if Offline, will [POST](https://www.w3schools.com/tags/ref_httpmethods.asp) the new data inputed by the user once the Application gets online to ensure it reaches the MongoDB.

  > Deployed Aplication > https://blooming-ravine-75704.herokuapp.com/ using [Heroku](https://www.heroku.com/) and [MongoDB-Cloud](https://www.mongodb.com/cloud).
  
  ## Table of contents
  
  - [Description](#Description)
  - [Usage](#Usage)
  - [License](#License)
  - [More](#Questions)
  
  ## Usage
  
  > To Edit/Guide from the project you may want to use [**Node.js**](https://nodejs.org/en/), a [**Command**](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/cmd) terminal to initialize the Application, and a Root Path for [**MongoDB**](https://www.mongodb.com/) to access DB Usage.

Example:
- cd desktop
- cd budget-tracker
- npm install (to install all dependencies)
- npm start (to initialize the server)
    > EX: http://localhost:3001/

_LightHouse Sample Below_

![light](https://user-images.githubusercontent.com/67067481/102006803-8f0d6b80-3ce9-11eb-9987-b62f344ce836.PNG)

  ## Questions?

  Account: **WoodwindCDT**

  Email: woodwind.turbeville@gmail.com

  More: Checkout my Work [WoodwindCDT](https://github.com/WoodwindCDT)

  Used Dependencies:

    - [express](https://www.npmjs.com/package/express): "^4.17.1",

    - [compression](https://www.npmjs.com/package/compression): "^1.7.4",

    - [mongoose](https://www.npmjs.com/package/mongoose): "^5.11.2",

  ## License
  This Project is licensed via MIT