# Maven Basics

Maven is a build automation and dependency management tool for Java projects.

---

## 1. Key Concepts

- **POM (Project Object Model)**: `pom.xml` defines project info, dependencies, plugins
- **Dependency**: External library your project needs
- **Plugin**: Tool to perform tasks (e.g., compile, package)

## 2. Basic Commands

```bash
mvn clean        # Remove target folder
mvn compile      # Compile code
mvn package      # Build jar/war
mvn install      # Install locally to Maven repo
mvn spring-boot:run # Run Spring Boot project
```

## 3. pom.xml Structure

```xml
<project>
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.example</groupId>
    <artifactId>myapp</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <dependencies>
        <!-- Spring Boot Web -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
    </dependencies>
    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>
</project>
```

## 4. Add Dependencies

- Add inside `<dependencies>` in `pom.xml`

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>
```

## 5. Build and Run

```bash
mvn clean package
java -jar target/myapp-0.0.1-SNAPSHOT.jar
```