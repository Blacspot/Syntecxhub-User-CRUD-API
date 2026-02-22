# Syntecxhub User CRUD API

A RESTful API for managing user data built with Node.js, Express, and MongoDB.

## Overview

This system provides a complete set of CRUD (Create, Read, Update, Delete) operations for managing user records. It uses MongoDB as the database and Express.js as the web framework.

## Features

- **Create Users** - Add new users to the database
- **Read Users** - Retrieve all users or a single user by ID
- **Update Users** - Modify existing user information
- **Delete Users** - Remove users from the database

## Technology Stack

| Technology | Purpose |
|------------|---------|
| [Node.js](https://nodejs.org/) | JavaScript runtime |
| [Express.js](https://expressjs.com/) | Web framework |
| [MongoDB](https://www.mongodb.com/) | Database |
| [Mongoose](https://mongoosejs.com/) | MongoDB ODM |
| [dotenv](https://www.npmjs.com/package/dotenv) | Environment variables |
| [bcrypt](https://www.npmjs.com/package/bcrypt) | Password hashing |

## User Model Schema

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Firstname | String | Yes | User's first name |
| Lastname | String | Yes | User's last name |
| Email | String | Yes (unique) | User's email address |
| Password | String | Yes | User's password |
| createdAt | Date | Auto | Timestamp when user was created |
| updatedAt | Date | Auto | Timestamp when user was last updated |

## API Endpoints

All endpoints are prefixed with `/crud`.

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/crud` | Get all users |
| GET | `/crud/:id` | Get a single user by ID |
| POST | `/crud` | Create a new user |
| PUT | `/crud/:id` | Update an existing user |
| DELETE | `/crud/:id` | Delete a user |

### Example Request Bodies

**POST /crud - Create User**
```json
{
    "Firstname": "John",
    "Lastname": "Doe",
    "Email": "john.doe@example.com",
    "Password": "securepassword123"
}
```

**PUT /crud/:id - Update User**
```json
{
    "Firstname": "John",
    "Lastname": "Smith",
    "Email": "john.smith@example.com",
    "Password": "newpassword456"
}
```

## Installation

1. Install dependencies:
```bash
npm install
# or
pnpm install
```

2. Configure environment variables:
   - Copy `.env.example` to `.env` (if available)
   - Set `MONGODB_URI` to your MongoDB connection string

3. Start the server:
```bash
# Production
npm run serve

# Development (with auto-reload)
npm run dev
```

The server will run on `http://localhost:3000`.

## Project Structure

```
Syntecxhub User CRUD API/
├── index.js                  # Main application entry point
├── package.json              # Project dependencies and scripts
├── .env                      # Environment variables (not committed)
├── .gitignore                # Git ignore rules
├── controllers/
│   └── user.controller.js    # Request handlers for user operations
├── models/
│   └── user.model.js         # Mongoose user schema definition
└── routes/
    └── user.routes.js        # API route definitions
```

## Response Formats

**Success Response (200/201)**
```json
{
    "message": "Operation successful",
    "user": { ... }
}
```

**Error Response (404/500)**
```json
{
    "message": "Error description",
    "error": "Error message"
}
```

## License

ISC
