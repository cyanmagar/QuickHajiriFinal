package com.cyan.Subject.service;

import com.cyan.Subject.entity.Subject;
import com.cyan.Subject.repository.SubjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SubjectServiceImpl implements SubjectService{

    @Autowired
    private SubjectRepository subjectRepository;


    @Override
    public Subject createSubject(Subject subject) {
        return subjectRepository.save(subject);
    }

    @Override
    public Subject updateSubject(int id, Subject subject) {
        Subject subject1= subjectRepository.findById(id).get();
        if (subject1 != null) {
            subject1.setSubjectId(id);
            return subjectRepository.save(subject);
        }
        return null;
    }

    @Override
    public List<Subject> getAllSubjects() {
        return subjectRepository.findAll();
    }

    @Override
    public Subject getSubjectById(int id) {
        return subjectRepository.findById(id).get();
    }

    @Override
    public void deleteSubject(int id) {
        Subject subject= subjectRepository.findById(id).get();
        subjectRepository.delete(subject);
    }
}
