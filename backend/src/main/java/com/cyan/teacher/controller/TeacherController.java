package com.cyan.teacher.controller;


import com.cyan.teacher.entity.Teacher;
import com.cyan.teacher.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:5173")
@Controller
@RequestMapping("/api/teacher")
public class TeacherController {

    @Autowired
    private TeacherService teacherService;

    @PostMapping("/save")
    public ResponseEntity<Teacher> createTeacher(@RequestBody Teacher teacher) {
        return new ResponseEntity<Teacher>(teacherService.createTeacher(teacher), HttpStatus.CREATED);
    }

    @GetMapping("/")
    public ResponseEntity<List<Teacher>> getAllTeachers() {
        return  new ResponseEntity<List<Teacher>>(teacherService.getAllTeachers(), HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Teacher> getTeacherById(@PathVariable Long id) {
        return  new ResponseEntity<Teacher>(teacherService.getTeacherById(id), HttpStatus.OK);
    }

    @PostMapping("/update/{id}")
    public ResponseEntity<Teacher> updateTeacher(@PathVariable Long id,@RequestBody Teacher teacher) {
        return new ResponseEntity<Teacher>(teacherService.updateTeacher(id, teacher), HttpStatus.OK);
    }

    @GetMapping("/delete/{id}")
    public ResponseEntity<String> deleteTeacher(@PathVariable Long id) {
        teacherService.deleteTeacher(id);
        return new ResponseEntity<String>("Deleted successfully", HttpStatus.OK);
    }


}
