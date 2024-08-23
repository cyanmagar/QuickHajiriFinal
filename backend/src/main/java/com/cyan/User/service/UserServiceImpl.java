package com.cyan.User.service;

import com.cyan.User.entity.User;
import com.cyan.User.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;


    @Override
    public User createUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public User updateUser(Long id, User user) {
        User u1= userRepository.findById(id).get();
        if(u1!=null){
            u1.setUserId(id);
            userRepository.save(user);
        }
        return null;
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User getUserById(Long id) {
        return userRepository.findById(id).get();
    }

    @Override
    public void deleteUser(Long id) {
        User user= userRepository.findById(id).get();
        userRepository.delete(user);
    }
}
