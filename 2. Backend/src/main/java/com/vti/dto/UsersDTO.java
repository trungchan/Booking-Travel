package com.vti.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.vti.entity.Role;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UsersDTO {
    private  int id;
    private String email;
    private String userName;
    private String phone;
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date date;
    private Role role;
}
