# IntelliJ IDEA Setup for Spring Boot

IntelliJ IDEA is a popular IDE for Java and Spring Boot development.

---

## 1. Download and Install

- Go to [JetBrains IntelliJ IDEA](https://www.jetbrains.com/idea/)
- Choose **Community Edition** (free) or **Ultimate Edition**
- Install following the wizard

## 2. Configure JDK

- Install **Java JDK 17** (LTS recommended)
- In IntelliJ: `File > Project Structure > Project SDK` → Add JDK path

## 3. Create New Spring Boot Project

- `File > New > Project > Spring Initializr`
- Select:
  - Project: Maven or Gradle
  - Language: Java
  - Spring Boot version: latest stable
- Click **Next**, add **Group**, **Artifact**, and **Dependencies** (e.g., Spring Web, Spring Data JPA)
- Finish

## 4. Project Structure

- `src/main/java` → Java code
- `src/main/resources` → application.properties / YAML
- `pom.xml` → Maven dependencies
- `src/test/java` → Unit tests

## 5. Run Project

- Open `Application.java`
- Click **Run** (green arrow) or use terminal:

```bash
mvn spring-boot:run
```

## 6. Useful IntelliJ Tips

- Auto-import Maven dependencies: `Settings > Build, Execution, Deployment > Maven`
- Enable **Spring support** plugin
- Use **Alt+Enter** to auto-fix errors