package com.cyan.student.controller;

import com.cyan.student.entity.Student;
import com.cyan.student.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@Controller
@RequestMapping("/api/student")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @PostMapping("/save")
    public ResponseEntity<Student>createStudent(@RequestBody Student student) {
        return new ResponseEntity<Student>(studentService.createStudent(student), HttpStatus.CREATED);
    }

    @GetMapping("/")
    public ResponseEntity<List<Student>> getAllStudents() {
        return new ResponseEntity<List<Student>>(studentService.getAllStudents(),HttpStatus.OK);
    }

    @PostMapping("/update/{id}")
    public ResponseEntity<Student> updateStudent(@PathVariable Long id,@RequestBody Student student) {
        return new ResponseEntity<Student>(studentService.updateStudent(id, student), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Student> getStudentById(@PathVariable Long id) {
        return  new ResponseEntity<Student>(studentService.getStudentById(id),HttpStatus.OK);
    }

    @GetMapping("/delete/{id}")
    public ResponseEntity<String> deleteStudent(@PathVariable Long id) {
        studentService.deleteStudent(id);
        return new ResponseEntity<String>("Deleted Successfully",HttpStatus.OK);
    }



}
