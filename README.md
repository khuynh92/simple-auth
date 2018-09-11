# Simple-Server

This is a simple server that uses signin / sign up to provide a user with a JWT token.

## Setup

1. After downloading the simple-server repo, `npm i` to install all packages.

1. create an `.env` file in the root directory.

**Environment Variables**

```
PORT=3000
MONGODB_URI= 'mongodb://localhost/your_mongo_db_name_here'
SECRET='your_secret_here'
```

## To Run

1. Start up a local mongoDB server

1. `npm run watch`


## API Endpoints

#### `POST /signup`

expects a user object

**Input**

```
{
 username: Bob,
  email: Bob@Dylan.com,
  password: goobledygook,
}
```

**Output**

JWT token

#### `GET /signin`

**Input**

expects basic auth in the header

**Output**

JWT token

#### `GET /api/v1/profiles`

**Output**

all users in the database.


#### `GET /api/v1/profiles/id/:id`

**Output**

Finds a single user matching the :id


#### `GET /api/v1/profiles/username/:username`

**Output**

Finds a single user matching the :username






