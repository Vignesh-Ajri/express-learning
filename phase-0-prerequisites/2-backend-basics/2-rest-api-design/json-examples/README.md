# JSON Examples

#### JSON (JavaScript Object Notation) is the de-facto standard data format for REST APIs. It is lightweight, human-readable, and easy for machines to parse. Here are examples of common JSON structures used in requests and responses.

## 1. Single Resource Object

### Represents a single entity, like a user or a product.

- **Endpoint**: `GET /users/123`
- **Response Body**:

```json
{
  "id": 123,
  "username": "jane_doe",
  "firstName": "Jane",
  "lastName": "Doe",
  "email": "jane.doe@example.com",
  "isActive": true,
  "createdAt": "2025-09-27T10:00:00Z"
}
```

## 2. Resource Collection (Array of Objects)

Represents a list of resources. The response is typically a JSON array.

- **Endpoint**: `GET /users`
- **Response Body**:

```json
[
  {
    "id": 123,
    "username": "jane_doe",
    "email": "jane.doe@example.com"
  },
  {
    "id": 124,
    "username": "john_smith",
    "email": "john.smith@example.com"
  }
]
```

## 3. Paginated Collection

For large collections, it's best to wrap the array in an object that includes pagination metadata.

- **Endpoint**: `GET /articles?page=2&limit=10`
- **Response Body**:

```json
{
  "pagination": {
    "currentPage": 2,
    "totalPages": 10,
    "totalItems": 98,
    "limit": 10
  },
  "data": [
    {
      "id": 11,
      "title": "Article Title 11",
      "publishedAt": "2025-09-26T12:00:00Z"
    },
    {
      "id": 12,
      "title": "Article Title 12",
      "publishedAt": "2025-09-26T11:00:00Z"
    }
  ]
}
```

## 4. Error Response

A standardized error format helps clients handle problems gracefully.

- **Endpoint**: `GET /users/999` (a user that doesn't exist)
- **Response Body**:

```json
{
  "status": 404,
  "error": "Not Found",
  "message": "User with ID 999 could not be found."
}
```

- **Endpoint**: `POST /users` (with invalid data)
- **Response Body**:

```json
{
  "status": 400,
  "error": "Bad Request",
  "message": "Input validation failed.",
  "details": [
    {
      "field": "email",
      "issue": "Must be a valid email address."
    },
    {
      "field": "password",
      "issue": "Must be at least 8 characters long."
    }
  ]
}
```

## 5. Nested Objects

Represents resources with has-one or has-many relationships.

- **Endpoint**: `GET /posts/42?include=author,comments`
- **Response Body**:

```json
{
  "id": 42,
  "title": "REST API Design",
  "content": "A deep dive into building great APIs...",
  "author": {
    "id": 123,
    "username": "jane_doe"
  },
  "comments": [
    {
      "id": 101,
      "text": "Great article!",
      "authorId": 124
    },
    {
      "id": 102,
      "text": "Very helpful, thanks.",
      "authorId": 125
    }
  ]
}
```

---
