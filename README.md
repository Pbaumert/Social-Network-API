
# Social Network API

## Video Example
[Video Example](https://drive.google.com/file/d/1eK9dx2Jo5HNemQf953lrK1_eiXPRopCx/view)

## Description

The Social Network API is a backend application for a social media platform where users can create accounts, share their thoughts, react to other users' thoughts, and manage a list of friends. This application is built with **Express.js** for routing, **MongoDB** as the database, and **Mongoose** as the ODM. The API is designed to handle large amounts of unstructured data efficiently.

## Table of Contents
- [Social Network API](#social-network-api)
  - [Video Example](#video-example)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [API Routes](#api-routes)
    - [User Routes](#user-routes)
    - [Thought Routes](#thought-routes)
    - [Reaction Routes](#reaction-routes)
  - [Technologies Used](#technologies-used)
  - [License](#license)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Pbaumert/Social-Network-API.git
   cd Social-Network-API
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

3. Ensure MongoDB is running on your local machine or provide a connection URI.

4. Seed the database with sample data (optional):
   ```bash
   node seed.js
   ```

5. Start the server:
   ```bash
   node server.js
   ```

## Usage

Once the server is running, you can use **Insomnia** or a similar API client to test the available routes. The application supports the following functionalities:
- **Create** a new user, thought, friend, or reaction.
- **Read** user and thought data.
- **Update** user and thought data.
- **Delete** users, thoughts, friends, and reactions.

## API Routes

### User Routes
- **GET** `/api/users` - Get all users.
- **GET** `/api/users/:userId` - Get a single user by ID.
- **POST** `/api/users` - Create a new user.
- **PUT** `/api/users/:userId` - Update user by ID.
- **DELETE** `/api/users/:userId` - Delete user by ID.
- **POST** `/api/users/:userId/friends/:friendId` - Add a friend to a user's friend list.
- **DELETE** `/api/users/:userId/friends/:friendId` - Remove a friend from a user's friend list.

### Thought Routes
- **GET** `/api/thoughts` - Get all thoughts.
- **GET** `/api/thoughts/:thoughtId` - Get a single thought by ID.
- **POST** `/api/thoughts` - Create a new thought.
- **PUT** `/api/thoughts/:thoughtId` - Update thought by ID.
- **DELETE** `/api/thoughts/:thoughtId` - Delete thought by ID.

### Reaction Routes
- **POST** `/api/thoughts/:thoughtId/reactions` - Add a reaction to a thought.
- **DELETE** `/api/thoughts/:thoughtId/reactions/:reactionId` - Remove a reaction by reaction ID.

## Technologies Used
- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **Insomnia** (for testing)

## License

This project is licensed under the MIT License.
