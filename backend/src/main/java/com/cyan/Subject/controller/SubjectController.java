package com.cyan.Subject.controller;

import com.cyan.Subject.entity.Subject;
import com.cyan.Subject.service.SubjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/api/subject")
public class SubjectController {

    @Autowired
    public SubjectService subjectService;


    public ResponseEntity<Subject>createSubject(Subject subject) {
        return new ResponseEntity<Subject>(subjectService.createSubject(subject), HttpStatus.CREATED);
    }


    public ResponseEntity<Subject>updateSubject(@PathVariable int id, Subject subject) {
        return new ResponseEntity<Subject>(subjectService.updateSubject(id, subject), HttpStatus.OK);
    }

    public ResponseEntity<List<Subject>>getAllSubject() {
        return new ResponseEntity<List<Subject>>(subjectService.getAllSubjects(), HttpStatus.OK);
    }


    public ResponseEntity<Subject>getSubjectById(@PathVariable int id) {
        return new ResponseEntity<Subject>(subjectService.getSubjectById(id), HttpStatus.OK);
    }


    public ResponseEntity<String>deleteSubject(@PathVariable int id) {
        subjectService.deleteSubject(id);
        return new ResponseEntity<String>("Deleted Successfully", HttpStatus.OK);
    }


}
