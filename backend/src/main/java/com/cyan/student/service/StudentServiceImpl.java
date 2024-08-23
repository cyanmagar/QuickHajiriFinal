package com.cyan.student.service;

import com.cyan.student.entity.Student;
import com.cyan.student.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    private StudentRepository studentRepository;

    @Override
    public Student createStudent(Student student) {
        student.setUserType("student");
        if (student.getImage() == null) {
            student.setImage("defaultImagePath");
        }
        if (student.getStudentContact() == null) {
            student.setStudentContact("defaultContact");
        }
        return studentRepository.save(student);
    }

    @Override
    public Student updateStudent(Long id, Student student) {
        Student oldStudent = studentRepository.findById(id).orElse(null);
        if (oldStudent != null) {
            student.setUserId(id);
            student.setStudentId(oldStudent.getStudentId());
            return studentRepository.save(student);
        }
        return null;
    }

    @Override
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    @Override
    public Student getStudentById(Long id) {
        return studentRepository.findById(id).orElse(null);
    }

    @Override
    public void deleteStudent(Long id) {
        Student student = studentRepository.findById(id).orElse(null);
        if (student != null) {
            studentRepository.delete(student);
        }
    }
}
