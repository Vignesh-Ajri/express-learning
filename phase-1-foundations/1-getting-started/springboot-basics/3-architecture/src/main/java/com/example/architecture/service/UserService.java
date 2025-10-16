package com.example.architecture.service;

import com.example.architecture.dto.UserDTO;
import com.example.architecture.model.User;
import com.example.architecture.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<UserDTO> getAllUsers() {
        List<User> users = userRepository.findAll();
        return users.stream()
                .map(u -> new UserDTO(u.getName(), u.getEmail()))
                .collect(Collectors.toList());
    }
}
