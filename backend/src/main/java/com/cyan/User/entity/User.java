package com.cyan.User.entity;


import jakarta.persistence.*;
import lombok.Data;


@Entity
@Data
@Inheritance(strategy = InheritanceType.JOINED)
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long userId;
    private String userName;
    private String password;
    private String userType;
}
