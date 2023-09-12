package com.vti.service;

import com.vti.dto.LoginD;
import com.vti.entity.User;
import com.vti.form.UserFromForCreating;
import com.vti.repository.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public  class UserService implements IUserService , UserDetailsService {
    @Autowired
    private IUserRepository repository;

    @Autowired
    private PasswordEncoder passwordEncoder;


    @Override
    public List<User> getAllUsers () {
        return repository.findAll();
    }

    @Override
    public LoginD findByUserName ( String userName ) {
        Optional<User> optional = repository.findByUserName(userName);
        if (optional.isPresent()){
            User user = optional.get();
            LoginD loginD = new LoginD();
            loginD.setId(user.getId());
            loginD.setUserName(userName);
            loginD.setRole(user.getRole());
            return loginD;
        }
        return null;
    }

    @Override
    public User createUserRegister ( UserFromForCreating form ) {
        User user = form.toAccount();
        user.setPassword(passwordEncoder.encode(form.getPassword()));
        return repository.save(user);
    }

    @Override
    public UserDetails loadUserByUsername ( String userName ) throws UsernameNotFoundException {
        Optional<User> optional = repository.findByUserName(userName);

        if (optional == null) {
            throw new UsernameNotFoundException("User not found with username: " + userName);
        }
        User user = optional.get();
            List<GrantedAuthority> authorities = new ArrayList<>();
           authorities.add(user.getRole());
        return new org.springframework.security.core.userdetails.User(user.getUserName(),user.getPassword(),AuthorityUtils.createAuthorityList(user.getRole().toString()));
//        if (optional.isPresent()){
//            User user = optional.get();
//            List<GrantedAuthority> authorities = new ArrayList<>();
//            authorities.add(user.getRole());
//            return new org.springframework.security.core.userdetails.User(user.getUserName(),user.getPassword(),authorities);
//        }else {
//            throw new UsernameNotFoundException(userName);
//        }
    }
}
