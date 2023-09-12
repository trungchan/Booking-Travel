package com.vti.controller;


import com.vti.form.UserFromForCreating;
import com.vti.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/Registers")
public class UserRegisterController {
@Autowired
    private IUserService service;
    @PostMapping
    public ResponseEntity<?> createUserRegister ( @RequestBody UserFromForCreating form ) {
        service.createUserRegister(form);
        return new ResponseEntity<String>("Create successfully!", HttpStatus.CREATED);
    }
}

