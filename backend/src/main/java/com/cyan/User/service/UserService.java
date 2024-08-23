package com.cyan.User.service;

import com.cyan.User.entity.User;

import java.util.List;

public interface UserService {


    public User createUser(User user);
    public User updateUser(Long id, User user);
    public List<User> getAllUsers();
    public User getUserById(Long id);
    public void deleteUser(Long id);




}
