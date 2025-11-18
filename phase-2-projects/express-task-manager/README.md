# Task Manager API

A simple RESTful API for managing tasks and categories with user authentication, built using Express.js, MongoDB, and JWT.

## Features

- User authentication (Register/Login)
- Create, read, update, and delete tasks
- Create and manage categories
- JWT-based authentication
- Task status management
- Protected routes for authenticated users

## Tech Stack

- Node.js & Express.js
- MongoDB & Mongoose
- JWT for authentication
- bcryptjs for password hashing
- Pug for frontend templates

## Installation

```bash
# Go to project folder
cd express-task-manager

# Install dependencies
npm install
```

## Configuration

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/task-manager
JWT_SECRET=your_super_secret_jwt_key_12345
JWT_EXPIRES_IN=7d
NODE_ENV=development
```

## Running the Project

1. Install dependencies: `npm install`
2. Create `.env` file with your configuration
3. Start MongoDB locally or use MongoDB Atlas
4. Run development server: `npm run dev`
5. API will be available at: `http://localhost:5000`

---

## API Endpoints

### Authentication

- `POST /api/auth/register` — Register new user
- `POST /api/auth/login` — Login user
- `GET /api/auth/me` — Get current user (protected)
- `POST /api/auth/logout` — Logout user (protected)

### Tasks (Protected)

- `POST /api/tasks` — Create a task
- `GET /api/tasks` — Get all tasks
- `PUT /api/tasks/:id` — Update a task
- `DELETE /api/tasks/:id` — Delete a task

### Categories (Protected)

- `POST /api/categories` — Create category
- `GET /api/categories` — Get all categories
- `DELETE /api/categories/:id` — Delete category

---

## Task Status Values

- `pending`
- `in-progress`
- `completed`

---

## Frontend Routes (Views)

### Public Pages

- `GET /` — Home
- `GET /login` — Login
- `GET /register` — Register

### Protected Pages

- `GET /dashboard` — User dashboard
- `GET /tasks` — Task management
- `GET /categories` — Category management

---

## Project Structure

```
task-manager-api/
├── src/
│   ├── config/          # Database configuration
│   ├── controllers/     # Route controllers
│   ├── middleware/      # Auth middleware
│   ├── models/          # Mongoose models
│   ├── routes/          # API routes
│   ├── utils/           # Utils files
│   └── validators/      # Validators
├── views/               # Pug templates
├── public/              # CSS & JS
├── .env                 # Environment variables
├── package.json
└── server.js            # Entry point
```
