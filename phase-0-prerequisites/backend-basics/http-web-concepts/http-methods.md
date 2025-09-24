## HTTP Methods (Verbs)

HTTP defines a set of request methods that indicate the desired action to be performed for a given resource. These are often called **HTTP verbs**. Each method has specific semantics, and understanding them is crucial for designing APIs and web applications.

---

### Key Concepts

- **Safe methods** → Do not modify server state (e.g., `GET`, `HEAD`, `OPTIONS`).
- **Idempotent methods** → Multiple identical requests have the same effect as one request (e.g., `PUT`, `DELETE`).
- **Cacheable methods** → Responses can be cached for future reuse (e.g., `GET`, sometimes `POST`).

| Method  | Safe | Idempotent | Cacheable      |
| ------- | ---- | ---------- | -------------- |
| GET     | ✅   | ✅         | ✅             |
| HEAD    | ✅   | ✅         | ✅             |
| OPTIONS | ✅   | ✅         | ❌             |
| TRACE   | ✅   | ✅         | ❌             |
| PUT     | ❌   | ✅         | ❌             |
| DELETE  | ❌   | ✅         | ❌             |
| POST    | ❌   | ❌         | ⚠️ Conditional |
| PATCH   | ❌   | ❌         | ⚠️ Conditional |
| CONNECT | ❌   | ❌         | ❌             |

---

### Common HTTP Methods

#### 1. **GET**

- Requests a representation of a resource.
- Should not change server state.
- **Cacheable** and widely used.
- Example:

  ```http
  GET /users/123 HTTP/1.1
  Host: example.com
  ```

#### 2. **HEAD**

- Same as `GET` but without the body.
- Used for checking metadata (e.g., `Content-Length`).

#### 3. **POST**

- Sends data to the server (e.g., form submission).
- Can create new resources or trigger actions.
- Example:

  ```http
  POST /users HTTP/1.1
  Content-Type: application/json

  {
    "name": "Alice",
    "email": "alice@example.com"
  }
  ```

#### 4. **PUT**

- Replaces the target resource with the request content.
- **Idempotent** → multiple identical requests give the same result.

#### 5. **DELETE**

- Removes a resource.
- Example:

  ```http
  DELETE /users/123 HTTP/1.1
  ```

#### 6. **PATCH**

- Applies **partial modifications** to a resource.
- Not guaranteed to be idempotent.

#### 7. **OPTIONS**

- Describes communication options.
- Used in **CORS preflight requests**.

#### 8. **TRACE**

- Echoes back the received request.
- Used for debugging.

#### 9. **CONNECT**

- Establishes a tunnel to the server.
- Commonly used for HTTPS.

---

**Visual Aid:** [HTTP Methods and CRUD](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
