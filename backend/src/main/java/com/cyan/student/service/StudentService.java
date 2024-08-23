package com.cyan.student.service;

import com.cyan.student.entity.Student;
import com.cyan.student.repository.StudentRepository;

import java.util.List;

public interface StudentService {

    public Student createStudent(Student student);

    public Student updateStudent(Long id, Student student);

    public List<Student> getAllStudents();
    public Student getStudentById(Long id);

    public void deleteStudent(Long id);





}
