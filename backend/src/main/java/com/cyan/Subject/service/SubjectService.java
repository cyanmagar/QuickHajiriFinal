package com.cyan.Subject.service;

import com.cyan.Subject.entity.Subject;

import java.util.List;

public interface SubjectService {

    public Subject createSubject(Subject subject);

    public Subject updateSubject(int id, Subject subject);

    public List<Subject> getAllSubjects();

    public Subject getSubjectById(int id);

    public void deleteSubject(int id);
}
