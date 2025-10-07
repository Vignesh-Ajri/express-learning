# Spring Initializr

Spring Initializr is a web-based tool to bootstrap Spring Boot projects quickly.

---

## 1. Access Spring Initializr

- Website: [https://start.spring.io/](https://start.spring.io/)

## 2. Project Options

- **Project**: Maven Project or Gradle Project
- **Language**: Java, Kotlin, or Groovy
- **Spring Boot Version**: Choose the latest stable release

## 3. Project Metadata

- **Group**: com.example (base package)
- **Artifact**: myapp (project name)
- **Name**: MyApp
- **Package Name**: com.example.myapp
- **Packaging**: Jar or War
- **Java**: Version 17 recommended

## 4. Dependencies

Add required dependencies (Spring Boot Starters):

- Spring Web → for REST APIs
- Spring Data JPA → for database integration
- H2 Database → in-memory testing
- Lombok → reduce boilerplate code
- Spring Security → authentication

## 5. Generate Project

- Click **Generate**
- Download `.zip` file
- Extract and open in IntelliJ IDEA

## 6. Benefits

- Quickly bootstrap projects
- Pre-configured build tool (Maven/Gradle)
- Avoid manual dependency setup
- Ready-to-run Spring Boot structure
