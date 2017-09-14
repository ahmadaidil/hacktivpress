# hacktivpress

## a simple blogging system with vue and express js

this project is provided for final live coding phase 2

## REST API

List of routes

Route | HTTP | Description
------|------|------------
`/user/signin` | POST | Login
`/user/signup` | POST | Register
`/article` | GET | Get all article
`/article/:id` | GET | Get one article
`/article` | POST | Create article
`/article/:id` | PUT | Update article
`/article/author/:author` | GET | Get all article by author
`/article/category/:category` | GET | Get all article by category
`/article/:id` | DELETE | remove article

## Usage
With only npm:
```
cd server (first) after that cd client
and command both of them like this:
npm install
npm start
npm run dev
```

Access from localhost via http://localhost:3000 for API/server side and http://localhost:8080 for Client side
