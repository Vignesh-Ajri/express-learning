# Express + Mongoose: Notes

This is a simple notes guide for setting up an Express + Mongoose.

## Mongoose Installation

Install Mongoose using npm:

```bash
npm install mongoose dotenv cors
```

> This installs Mongoose, dotenv (for environment variables), and cors (for cross-origin requests).

---

## File/Folder Structure

- `express-database/` (main folder with npm registry initialized)

  - `server.js` (main entry file)
  - `.env` → holds environment variables like `PORT` and `MONGO_URI`
  - `config/` → contains `database.js` to connect MongoDB
  - `models/` → defines database schemas, e.g., `User.js`
  - `controllers/` → contains controller logic, e.g., `userController.js`
  - `routes/` → maps endpoints to controller functions, e.g., `users.js`

---

## Flow of Execution

1. Client sends a request to the Express server.
2. `server.js` receives the request and forwards it to the appropriate route file.
3. The route calls the controller function.
4. Controller uses the model to interact with MongoDB via Mongoose.
5. Model communicates with the database using the connection from `config/database.js`.
6. Controller sends back the response to the client.
7. Check your API endpoints in Postman to verify responses.

---

## Simplified Flow Diagram

Client Request → Server (`server.js`) → Routes → Controller → Model → MongoDB → Response → Client
