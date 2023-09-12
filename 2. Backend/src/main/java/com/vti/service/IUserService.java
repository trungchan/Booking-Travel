package com.vti.service;

import com.vti.dto.LoginD;
import com.vti.entity.User;
import com.vti.form.UserFromForCreating;
import org.springframework.security.core.userdetails.UserDetailsService;


import java.util.List;

public interface IUserService extends UserDetailsService {
    List<User> getAllUsers();
    LoginD findByUserName( String userName);

    User createUserRegister( UserFromForCreating form);

//    UserDetails loadUserByUsername ( String userName ) throws UsernameNotFoundException;
}
