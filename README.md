# Feedback System

A full-stack web application that allows users to submit, view, and manage feedback through a clean and responsive interface.

This project was built as my first full-stack application to learn how a frontend communicates with a backend API and how data is stored in a MongoDB database.

## Features

* Submit feedback through a simple web interface
* Store feedback in MongoDB Atlas
* Display all submitted reviews dynamically
* Delete all stored feedback
* Responsive and modern UI
* RESTful API built with Express.js

## Tech Stack

### Frontend

* HTML5
* CSS3
* JavaScript (Vanilla JS)

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

## How It Works

1. Users enter their name and feedback.
2. The frontend sends a POST request to the Express server.
3. The server validates and stores the data in MongoDB.
4. The frontend fetches all feedback from the API.
5. Reviews are displayed dynamically under the Insights section.

## API Endpoints

### Add Feedback

POST `/addData`

```json
{
  "name": "John",
  "feedback": "Great website!"
}
```

### Get All Feedback

GET `/feedback`

Returns all stored feedback.

### Delete All Feedback

DELETE `/deleteData`

Deletes every feedback entry from the database.

## Project Structure

```text
feedback-system/
│
├── index.html
├── style.css
├── script.js
├── server.js
├── package.json
├── .gitignore
└── .env
```

## Installation

Clone the repository:

```bash
git clone <repository-url>
cd feedback-system
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Start the server:

```bash
node server.js
```

Open:

```text
http://localhost:5000
```

## What I Learned

This project helped me learn:

* REST APIs
* CRUD operations
* Express.js routing
* MongoDB and Mongoose
* Frontend-backend communication
* Asynchronous JavaScript with Fetch API
* Environment variables using `.env`
* Git and GitHub workflows

## Future Improvements

* Edit individual reviews
* Delete specific reviews
* User authentication
* Rating system
* Search and filtering
* Pagination
* Improved analytics dashboard

## Author

Built by KARTHIK MANOJ

My first full-stack web application.
