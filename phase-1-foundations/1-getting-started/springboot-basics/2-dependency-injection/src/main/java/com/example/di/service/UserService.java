package com.example.di.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.di.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private EmailService emailService;

    public String processUser() {
        String user = userRepository.getUser();
        return emailService.sendEmail(user);
    }
}
