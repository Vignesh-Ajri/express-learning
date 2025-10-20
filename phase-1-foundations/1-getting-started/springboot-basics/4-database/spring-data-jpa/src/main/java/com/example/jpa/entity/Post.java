package com.example.jpa.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "posts")
public class Post {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public Post() {}

    public Post(String title, User user) {
        this.title = title;
        this.user = user;
    }

    public Long getId() { return id; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public User getUser() { return user; }
    public void setUser(User user) { this.user = user; }
}
