package com.cyan.teacher.service;

import com.cyan.teacher.entity.Teacher;

import java.util.List;

public interface TeacherService {

    public Teacher createTeacher(Teacher teacher);
    public List<Teacher> getAllTeachers();
    public Teacher getTeacherById(Long id);
    public Teacher updateTeacher(Long id, Teacher teacher);
    public void deleteTeacher(Long id);


}
