package com.example.architecture.repository;

import com.example.architecture.model.User;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Arrays;

@Repository
public class UserRepository {
    public List<User> findAll() {
        return Arrays.asList(
                new User(1, "Vignesh", "vignesh@example.com"),
                new User(2, "Arun", "arun@example.com")
        );
    }
}
