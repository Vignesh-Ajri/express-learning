## HTTP Request-Response Cycle

The **request-response cycle** is the fundamental communication model of HTTP. A client (usually a browser) sends a request, and the server responds.

---

### Steps

1. **Open TCP Connection** → Client establishes a connection.
2. **Send Request** → Includes method, path, headers, and optional body.
3. **Server Processes Request** → Executes logic, retrieves/updates resources.
4. **Send Response** → Includes status code, headers, and optional body.
5. **Close/Reuse Connection** → Persistent connections allow multiple requests.

---

### Example

**Request:**

```http
GET /index.html HTTP/1.1
Host: example.com
User-Agent: Mozilla/5.0
Accept: text/html
```

**Response:**

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1256

<!DOCTYPE html>
<html>
  <head><title>Example</title></head>
  <body>Hello World!</body>
</html>
```

---

**Visual Aid:** ![Request-Response Cycle](https://mdn.github.io/shared-assets/images/diagrams/http/overview/fetching-a-page.svg)
