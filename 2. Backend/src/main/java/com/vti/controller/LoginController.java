package com.vti.controller;



import com.vti.dto.LoginDTO;
import com.vti.entity.User;
import com.vti.service.IUserService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("api/v1/Logins")
public class LoginController {
    @Autowired
    private IUserService service;
    @Autowired
    private ModelMapper mapper;


    @GetMapping()
    public ResponseEntity<?> login( Principal principal)  {
//        User userDB = service.findByUserName(principal.getName());
//        List<User> entites = service.getAllUsers();
//        List<LoginDTO> dtos = mapper.map(entites,new TypeToken<List<LoginDTO>>() {}.getType());
        return new ResponseEntity<>(null, HttpStatus.OK);
    }
}
