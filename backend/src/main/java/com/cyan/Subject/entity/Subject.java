package com.cyan.Subject.entity;

import com.cyan.teacher.entity.Teacher;
import jakarta.persistence.*;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;

@Entity
@Data
public class Subject {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long subjectId;
    private String semester;
    private String faculty;
    private String subjectName;

//    @OneToOne
//    @JoinColumn(name="teacher_id")
//    private Teacher teacher;



}
