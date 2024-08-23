package com.cyan.User.controller;

import com.cyan.User.entity.User;
import com.cyan.User.service.UserService;

import com.cyan.teacher.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {


    @Autowired
    private UserService userService;


    @PostMapping("/save")
    public ResponseEntity<User> createTeacher(@RequestBody User user) {
        return new ResponseEntity<User>(userService.createUser(user), HttpStatus.CREATED);
    }

    @GetMapping("/")
    public ResponseEntity<List<User>> getAllTeachers() {
        return  new ResponseEntity<List<User>>(userService.getAllUsers(), HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        return  new ResponseEntity<User>(userService.getUserById(id), HttpStatus.OK);
    }

    @PostMapping("/update/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id,@RequestBody User teacher) {
        return new ResponseEntity<User>(userService.updateUser(id, teacher), HttpStatus.OK);
    }

    @GetMapping("/delete/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return new ResponseEntity<String>("Deleted successfully", HttpStatus.OK);
    }


}
