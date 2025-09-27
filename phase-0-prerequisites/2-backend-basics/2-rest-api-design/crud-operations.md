# CRUD Operations in REST

CRUD stands for Create, Read, Update, and Delete. In a RESTful API, these operations are mapped directly to standard HTTP methods (verbs). This provides a uniform and predictable interface for manipulating resources.

## Mapping HTTP Methods to CRUD

| Operation | CRUD   | HTTP Method | Idempotent? | Description                                                            |
| --------- | ------ | ----------- | ----------- | ---------------------------------------------------------------------- |
| Create    | Create | `POST`      | No          | Creates a new resource. The server determines the new resource's URI.  |
| Read      | Read   | `GET`       | Yes         | Retrieves a representation of a resource or a collection of resources. |
| Update    | Update | `PUT`       | Yes         | Replaces an existing resource entirely with a new representation.      |
| Update    | Update | `PATCH`     | No          | Applies a partial modification to an existing resource.                |
| Delete    | Delete | `DELETE`    | Yes         | Removes a resource.                                                    |

**Idempotence Note**: An operation is idempotent if making the same request multiple times has the same effect as making it once. `DELETE /users/123` is idempotent because once the user is deleted, subsequent calls will still result in the user being gone (typically returning a `404 Not Found`).

## Example Workflow: A "Posts" Resource

Let's walk through the lifecycle of a `post` resource.

### 1. Create a New Post

- **Action**: Send a `POST` request with the new post data in the request body.
- **Endpoint**: `POST /posts`
- **Request Body**:

```
{
  "title": "My First Post",
  "content": "Hello, world!",
  "authorId": 1
}
```

- **Successful Response**: `201 Created` with a `Location` header pointing to the new resource (e.g., `Location: /posts/123`) and optionally the new resource in the body.

### 2. Read Posts

- **Action**: Get a list of all posts.
- **Endpoint**: `GET /posts`
- **Successful Response**: `200 OK` with an array of post objects.
- **Action**: Get a single, specific post.
- **Endpoint**: `GET /posts/123`
- **Successful Response**: `200 OK` with the post object for ID `123`.

### 3. Update a Post

- **Full Update (PUT)**: Replaces the entire resource. If you omit a field, it may be set to `null` or a default value.

- **Endpoint**: `PUT /posts/123`
- **Request Body**:
  ```
  {
    "title": "My Updated Post Title",
    "content": "This content has been completely replaced.",
    "authorId": 1
  }
  ```
- **Successful Response**: `200 OK`.

- **Partial Update (PATCH)**: Modifies only the fields provided.
- **Endpoint**: `PATCH /posts/123`
- **Request Body**:
  ```
  {
    "content": "This content has been slightly updated."
  }
  ```
- **Successful Response**: `200 OK`.

### 4. Delete a Post

- **Action**: Remove a specific post.
- **Endpoint**: `DELETE /posts/123`
- **Successful Response**: `204 No Content` (as there is no data to return) or `200 OK`.
