# The NoSQL Network: A Mongoose Social Network API Challenge

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributing)
6. [User Story/Acceptance Criteria](#user-story-and-acceptance-criteria)
7. [Questions](#questions)

## Description

This project does not have a web-based deployment. Instead, this content management system (CMS) is deployed via the console.

This application is a CMS that is utilizing a NoSQL database to track a social networks content through Users, Thoughts, and Reactions. It can be used to keep track of a user's friends, thoughts and reactions to thoughts. It is an API system that can be called via Insomnia, or any other request application. This application will use a Node.js back end and will save and retrieve data from the Mongoose NoSQL server database. 

### Mock Up

The video below shows the deployed APIs in a demo, showing it's various levels of functionality.

[![A full video demonstration of the app's numerous levels of functionality.](./assets/the-nosql-network.mp4)](./assets/the-nosql-network.mp4)

### Task Completed
The challenge here was to build an API for social network application where users can share their thoughts, react to friends’ thoughts, and create a friend list. It uses Express.js for routing, a MongoDB database, and the Mongoose ODM.

MongoDB is a popular choice for many social networks due to its speed with large amounts of data and flexibility with unstructured data. Using several of the technologies that social networking platforms use in their full-stack applications is important for gaining critical experience. Because the foundation of this applications is data, it’s important to understand how to build and structure the API first. The criteria are documented in the Acceptance Criteria section. 

## Installation

This project is not necessarily deployed, so a local installation must be used by downloading the repo. The application uses MongoDB to interact with the data. <b>The first time the repo is downloaded, the application should first be initialized.</b> This can be done with the command 'npm run seed' in the command line. <b>Then, the app is started with 'npm start' in the console.</b> Insomnia can then be used to GET, POST, PUT, and DELETE data from the database.

## Usage

This project is meant to provide an easy solution to handling a social network's largest content on the fly. It can save data, delete them, and update them to better organize data. It is an API used to save the data to persist. 

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This project is licensed under the MIT license.

## Contributing

To contribute to this repository, simply create a pull request, create issues, or reach out to me (see [Questions](#questions) below). I do my best to ensure that pull requests are up to date. 

## User Story and Acceptance Criteria

### User Story
```
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

### Acceptance Criteria
```
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

I've also included some bonus features not listed in the acceptance criteria:

```
Remove a user's associated thoughts when deleted.
POST to add a new friend to a user's friend list
DELETE to remove a friend from a user's friend list

GET to get all thoughts
GET to get a single thought by its _id
POST to create a new thought
PUT to update a thought by its _id
DELETE to remove a thought by its _id

POST to create a reaction stored in a single thought's reactions array field
DELETE to pull and remove a reaction by the reaction's reactionId value
```
## Questions

If you have any questions, reach out to me through either of the methods below:
- [GitHub - J03B](https://github.com/J03B/)
- [email - (byucrazyfan@gmail.com)](mailto:byucrazyfan@gmail.com)
