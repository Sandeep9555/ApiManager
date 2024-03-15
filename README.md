# NoteAPI

##  Description
NoteAPI is a RESTful API for managing notes. It provides endpoints for creating, reading, updating, and deleting notes. Authentication is handled using JSON Web Tokens (JWT), and passwords are securely hashed using bcrypt. The API is built with Node.js and Express, and it uses MongoDB as its database with Mongoose for object modeling.







## Installation
To install NoteAPI and its dependencies, run the following command:

```bash
npm install
```

## Usage
To start the server, run:

```bash
npm start
```
This will start the server using nodemon, which will automatically restart the server when changes are made to the code.
## End Points

The following endpoints are available:

###### POST /api/auth/register: Register a new user.
###### POST /api/auth/login: Log in and receive a JWT token.
###### GET /api/notes: Get all notes.
###### GET /api/notes/:id: Get a specific note by ID.
###### POST /api/notes: Create a new note.
###### PUT /api/notes/:id: Update a note by ID.
###### DELETE /api/notes/:id: Delete a note by ID.


All endpoints except for registration and login require authentication with a valid JWT token.
## Enviromental  Variables

Make sure to create a .env file in the root directory with the following variables:


```
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```
Replace your_mongodb_uri with your MongoDB connection string and your_jwt_secret with a secret key for JWT token generation.
## Dependencies

##### bcrypt: ^5.1.0
##### cors: ^2.8.5
##### dotenv: ^16.3.1
##### express: ^4.18.2
##### jsonwebtoken: ^9.0.1
##### mongoose: ^7.3.4
##### nodemon: ^3.0.1
## License


This README provides an overview of the NoteAPI project, installation instructions, usage guidelines, information about endpoints, environment variables required, dependencies, and licensing details.
