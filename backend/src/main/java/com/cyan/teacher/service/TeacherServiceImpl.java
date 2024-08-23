package com.cyan.teacher.service;

import com.cyan.teacher.entity.Teacher;
import com.cyan.teacher.repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TeacherServiceImpl implements TeacherService {

    @Autowired
    private TeacherRepository teacherRepository;

    @Override
    public Teacher createTeacher(Teacher teacher) {
        teacher.setUserType("teacher");
        return teacherRepository.save(teacher);
    }

    @Override
    public Teacher updateTeacher(Long id, Teacher teacher) {
        Teacher oldTeacher = teacherRepository.findById(id).orElse(null);
        if (oldTeacher != null) {
            teacher.setUserId(id); // Ensure the ID is set correctly
            teacher.setTeacherId(oldTeacher.getTeacherId()); // Keep the original teacherId
            return teacherRepository.save(teacher);
        }
        return null;
    }

    @Override
    public List<Teacher> getAllTeachers() {
        return teacherRepository.findAll();
    }

    @Override
    public Teacher getTeacherById(Long id) {
        return teacherRepository.findById(id).orElse(null);
    }

    @Override
    public void deleteTeacher(Long id) {
        Teacher teacher = teacherRepository.findById(id).orElse(null);
        if (teacher != null) {
            teacherRepository.delete(teacher);
        }
    }
}
