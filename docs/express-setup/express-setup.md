# Express Initialization

Express is a minimal and flexible Node.js framework for building web applications and APIs.

---

## 1. Install Express

```bash
npm install express
```

## 2. Create Entry File

Create `index.js` or `app.js`.

## 3. Basic Express App

```javascript
// index.js
const express = require("express");
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```

## 4. Common Express Methods

- `app.get(path, callback)` – Handle GET requests
- `app.post(path, callback)` – Handle POST requests
- `app.put(path, callback)` – Handle PUT requests
- `app.delete(path, callback)` – Handle DELETE requests

## 5. Middleware

Middleware functions execute during the request-response cycle.

```javascript
app.use((req, res, next) => {
  console.log("Middleware executed");
  next(); // proceed to next middleware or route
});
```

## 6. Handling JSON Requests

```javascript
app.post("/data", (req, res) => {
  console.log(req.body); // JSON data from client
  res.send("Data received");
});
```

## 7. Start Server

```bash
node index.js
```

Then visit `http://localhost:3000` in your browser.
