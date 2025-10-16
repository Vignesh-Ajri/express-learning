package com.example.di.repository;

import org.springframework.stereotype.Repository;

@Repository
public class UserRepository {
    public String getUser() {
        return "Vignesh";
    }
}
