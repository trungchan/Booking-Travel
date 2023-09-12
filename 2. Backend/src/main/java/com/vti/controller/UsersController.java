package com.vti.controller;

import com.vti.dto.DeparturesDTO;
import com.vti.dto.UsersDTO;
import com.vti.entity.Departures;
import com.vti.entity.User;
import com.vti.service.IDeparturesService;
import com.vti.service.IUserService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1/user")
public class UsersController {
    @Autowired
    private IUserService service;

    @Autowired
    private ModelMapper mapper;

    @GetMapping
    public ResponseEntity<?> getAllUsers () {
        List<User> entities = service.getAllUsers();
        List<UsersDTO> dtos = mapper.map(entities, new TypeToken<List<UsersDTO>>() {}.getType());
        return new ResponseEntity<>(dtos, HttpStatus.OK);
    }
}
