## HTTP Headers

Headers are **key-value pairs** sent in both requests and responses. They provide metadata such as content type, caching policies, authentication, and more.

---

### Types of Headers

1. **Request Headers** → Sent by client.

   - Examples: `Host`, `User-Agent`, `Accept`, `Authorization`.

2. **Response Headers** → Sent by server.

   - Examples: `Server`, `Set-Cookie`, `Location`.

3. **Entity/Representation Headers** → Describe content.

   - Examples: `Content-Type`, `Content-Length`, `Content-Encoding`.

4. **Control Headers** → Influence caching, connection.

   - Examples: `Cache-Control`, `Connection`.

---

### Common Headers

- `Content-Type`: Specifies data type (e.g., `application/json`).
- `Authorization`: Used for authentication (e.g., `Bearer token`).
- `Cache-Control`: Defines caching rules.
- `User-Agent`: Identifies the client software.
- `Accept`: Specifies accepted content types.
- `Set-Cookie`: Sends cookies to client.

---

**Visual Aid:** ![Request & Response Headers](https://mdn.github.io/shared-assets/images/diagrams/http/overview/http-request.svg)
