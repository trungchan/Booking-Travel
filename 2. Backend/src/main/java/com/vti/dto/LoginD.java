package com.vti.dto;

import com.vti.entity.Role;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class LoginD {

    private int id;
    private String userName;
    private Role role;
    private String userAgent;
    private String token;

}

