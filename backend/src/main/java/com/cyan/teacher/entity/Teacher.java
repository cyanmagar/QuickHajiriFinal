package com.cyan.teacher.entity;

import com.cyan.Subject.entity.Subject;
import com.cyan.User.entity.User;
import com.cyan.student.entity.Student;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Teacher extends User {

    private long teacherId;
    private String teacherName;
    private String teacherContact;
    private String teacherEmail;



}
