package com.cyan.student.entity;


import com.cyan.User.entity.User;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Student extends User {
    private long studentId;
    private int rollNo;
    private String studentName;
    private String email;
    private String gender;
    private String Batch;
    private String studentContact;
    private String Semester;
    private String image;


}
