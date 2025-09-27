# Resource-Based URLs

Resource-based URLs are the foundation of a clean and intuitive REST API. They define how clients will access and interact with the data your API exposes. The core principle is to model your API around "resources" (nouns) rather than "actions" (verbs).

## Core Principles

1. **Use Nouns for Resources**: URLs should represent entities, not operations.

   - **Good**: `/users`, `/articles`, `/orders`
   - **Bad**: `/getUsers`, `/createArticle`, `/deleteOrder`

2. **Use Plurals for Collections**: A URL that returns a list of resources should be plural. This makes the distinction between a collection and a specific item clear.

   - `/articles` (a collection of all articles)
   - `/articles/123` (a single, specific article)

3. **Show Hierarchy with Nesting**: For resources that have a clear parent-child relationship, use nested paths to represent this hierarchy.

   - **Good**: `/users/42/orders` (all orders belonging to user with ID 42).
   - **Good**: `/users/42/orders/99` (order 99 belonging to user 42).
   - **Avoid excessive nesting**: Deeply nested URLs (e.g., `/customers/1/orders/2/items/3`) can become unwieldy. A good rule of thumb is to not go more than two levels deep.

4. **Use Hyphens for Readability**: If a resource name contains multiple words, use hyphens (`-`) to separate them. This is more SEO-friendly and readable than underscores (`_`) or camelCase.

   - **Good**: `/blog-posts`
   - **Bad**: `/blog_posts`, `/blogPosts`

5. **Use Query Parameters for Filtering, Sorting, and Pagination**: Do not create new URLs for different views of the same resource collection.

   - **Filtering**: `/articles?status=published&author=jane`
   - **Sorting**: `/articles?sort=-published_at` (descending by publication date)
   - **Pagination**: `/articles?page=2&limit=20`

6. **Version Your API**: Include a version number in the URL to avoid breaking changes for existing clients.
   - **Recommended**: `https://api.example.com/v1/users`

## Examples

| Description                                   | URL                                | Notes                                          |
| --------------------------------------------- | ---------------------------------- | ---------------------------------------------- |
| Get a collection of all users                 | `/users`                           | Plural noun for a collection.                  |
| Get a specific user                           | `/users/123`                       | Unique identifier for a single resource.       |
| Get all orders for a specific user            | `/users/123/orders`                | Nested resource showing a relationship.        |
| Get a specific order for a specific user      | `/users/123/orders/456`            | Specific nested resource.                      |
| Filter articles by tag and sort by date       | `/articles?tag=tech&sort=-created` | Query parameters handle filtering and sorting. |
| Get the second page of products (10 per page) | `/products?page=2&limit=10`        | Query parameters handle pagination.            |
| Get all user profiles                         | `/user-profiles`                   | Multi-word resources use hyphens.              |
| API Version 1 endpoint for customers          | `/v1/customers`                    | Versioning is explicit in the path.            |
