# relationships (example)
- Port: 8091
- H2 console: /h2-console
- Entities: Author, Book, Category
- Repositories: AuthorRepository, BookRepository, CategoryRepository
- Data initializer seeds example authors, books, and categories on startup.

Run:
```
cd relationships
mvn spring-boot:run
```

Then open:
- GET http://localhost:8091/ (no REST controllers provided by default; check H2 console or inspect DB via JPA repo)
- H2 console: http://localhost:8091/h2-console (JDBC URL: jdbc:h2:mem:rel-db)
