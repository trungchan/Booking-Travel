package com.vti.controller;

import com.vti.configuration.Exception.AppException;
import com.vti.configuration.Exception.Error;
import com.vti.configuration.Jwt.JwtTokenUtils;
import com.vti.dto.LoginD;
import com.vti.dto.LoginRequest;
import com.vti.entity.User;
import com.vti.repository.IUserRepository;
import com.vti.service.IUserService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/auth")
@CrossOrigin("*")
public class authController {
    @Autowired
    private IUserService userService;
    @Autowired
    private JwtTokenUtils jwtTokenUtils;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    BCryptPasswordEncoder encoder;
    @Autowired
    HttpServletRequest httpServletRequest;
    @PostMapping("/login")
    public ResponseEntity<?> loginJwt( @RequestBody LoginRequest request ) throws Exception {
//        final UserDetails userDetails = service
//                .loadUserByUsername(request.getUserName());
//        authenticate(request.getUserName(), request.getPassword());
//        String token = jwtTokenUtils.generateToken(userDetails);
//        LoginD loginD = new LoginD();
//        loginD.setId(userDetails.getUserId());
//        loginD.setUserName(userDetails.getUsername());
//        loginD.setRole(userDetails.getRole());
//        loginD.setToken(token);


        authenticate(request.getUserName(), request.getPassword());
//        LoginD loginD = new LoginD();
////        Sao chép thông tin vừa tìm kiếm được vào obj loginD
//        BeanUtils.copyProperties(optional.get(),loginD);
////Lấy User-Agent từ header của yêu cầu
//        loginD.setUserAgent(httpServletRequest.getHeader("User-Agent"));
////        Tạo token JWT bằng jwtTokenUtils.CreateAccessToken(loginD)
////        final Optional<User> userDetails = userRepository.findByUserName(request.getUserName());
////        String token = jwtTokenUtils.generateToken(loginD);
//        String token = jwtTokenUtils.CreateAccessToken(loginD);
////        Gắn token vào loginD
//        loginD.setToken(token);
        LoginD loginD = userService.findByUserName(request.getUserName());
        loginD.setToken(jwtTokenUtils.generateToken(userService.loadUserByUsername(request.getUserName())));
        return ResponseEntity.ok(loginD);
    }

    private void authenticate(String username, String password) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        } catch (DisabledException e) {
            throw new Exception("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        }
    }
}
