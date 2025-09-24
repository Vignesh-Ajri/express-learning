## HTTP Status Codes

HTTP status codes are **three-digit numbers** returned by a server to indicate the outcome of a client’s request. They are defined in [RFC 9110](https://www.rfc-editor.org/rfc/rfc9110).

---

### Categories

| Category | Range   | Meaning                 |
| -------- | ------- | ----------------------- |
| 1xx      | 100–199 | Informational responses |
| 2xx      | 200–299 | Successful responses    |
| 3xx      | 300–399 | Redirection messages    |
| 4xx      | 400–499 | Client error responses  |
| 5xx      | 500–599 | Server error responses  |

---

### Common Status Codes

#### 2xx Success

- `200 OK` → Request successful.
- `201 Created` → New resource created.
- `204 No Content` → Success, but no body.

#### 3xx Redirection

- `301 Moved Permanently` → Resource moved.
- `302 Found` → Temporary redirection.
- `304 Not Modified` → Cached resource still valid.

#### 4xx Client Errors

- `400 Bad Request` → Malformed request.
- `401 Unauthorized` → Authentication required.
- `403 Forbidden` → Access denied.
- `404 Not Found` → Resource not found.
- `429 Too Many Requests` → Rate limiting.

#### 5xx Server Errors

- `500 Internal Server Error` → Generic error.
- `502 Bad Gateway` → Invalid response from upstream.
- `503 Service Unavailable` → Server overloaded or down.
- `504 Gateway Timeout` → No timely response.

---

**Visual Aid:** ![Status Code Categories](https://i.imgur.com/2fSEutR.png)
