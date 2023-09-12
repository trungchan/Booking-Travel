package com.vti.form;

import com.vti.entity.Role;
import com.vti.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserFromForCreating {

    private String email;
    private String userName;
    private String phone;
    private String password;
    private Role role;

    public User toAccount(){
        return new User(email, userName, phone, password);
    }
}
