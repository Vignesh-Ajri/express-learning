package com.example.di.service;

import org.springframework.stereotype.Service;

@Service
public class EmailService {
    public String sendEmail(String user) {
        return "Email sent successfully to " + user;
    }
}
