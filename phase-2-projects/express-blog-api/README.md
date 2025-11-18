# Express Blog API

A simple RESTful API for a blog application built with Express.js, MongoDB, and JWT authentication.

## Features

- User authentication (Register/Login)
- Create, read, update, and delete blog posts
- Comment on posts
- JWT token-based authentication
- Role-based access control

## Tech Stack

- Node.js & Express.js
- MongoDB & Mongoose
- JWT for authentication
- bcryptjs for password hashing

## Installation

```bash
# Goto folder express-blog-api
cd express-blog-api

# Install dependencies
npm install
```

## Configuration

Create a `.env` file in the root directory:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/blog-api
JWT_SECRET=your_super_secret_key_change_this
JWT_EXPIRE=7d
NODE_ENV=development
```

## Running the Project

1. Install dependencies: `npm install`
2. Create `.env` file with your configuration
3. Start MongoDB locally or use MongoDB Atlas
4. Run development server: `npm run dev`
5. API will be available at `http://localhost:5000`

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)

### Posts

- `GET /api/posts` - Get all published posts
- `GET /api/posts/:id` - Get single post
- `POST /api/posts` - Create post (protected)
- `PUT /api/posts/:id` - Update post (protected, owner only)
- `DELETE /api/posts/:id` - Delete post (protected, owner only)

### Comments

- `GET /api/comments/post/:postId` - Get comments for a post
- `POST /api/comments/post/:postId` - Create comment (protected)
- `DELETE /api/comments/:id` - Delete comment (protected, owner only)

## Project Structure

```
express-blog-api/
├── src/
│   ├── config/          # Database configuration
│   ├── controllers/     # Route controllers
│   ├── middleware/      # Custom middleware
│   ├── models/          # Mongoose models
│   ├── routes/          # API routes
│   ├── utils/           # Helper functions
│   └── app.js           # Express app setup
├── .env                 # Environment variables
├── package.json
└── server.js            # Entry point
```
