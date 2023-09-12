package com.vti.configuration.Jwt;

import com.sun.istack.NotNull;


import com.vti.dto.LoginD;
import com.vti.service.UserService;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.AuthenticationFilter;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;

//là một phần quan trọng của việc xác thực và kiểm tra tính hợp lệ của token JWT trong các yêu cầu đến ứng dụng của bạn
@Component
public class JwtRequestFilter extends OncePerRequestFilter {
    private static final String AUTHORIZATION = "Authorization";
//
//    @Autowired
//    private  JwtTokenUtils jwtTokenUtils;
//    @Override
////    Phương thức này sẽ được gọi mỗi khi có một yêu cầu đến ứng dụng.
//    protected void doFilterInternal ( HttpServletRequest httpServletRequest, @NotNull HttpServletResponse httpServletResponse,@NotNull FilterChain filterChain ) throws ServletException, IOException {
//        //lay token tu api
//        String token = httpServletRequest.getHeader(AUTHORIZATION);
//        String request = httpServletRequest.getRequestURI();
//
//        if (StringUtils.containsAnyIgnoreCase(request,"/api/v1/auth/login")){
//            filterChain.doFilter(httpServletRequest,httpServletResponse);
//        }else {
//            if (jwtTokenUtils.checkToken(token,httpServletResponse,httpServletRequest)){
//                LoginD loginD = jwtTokenUtils.parseAccessToken(token);
//                List<GrantedAuthority> authorities = new ArrayList<>();
//                UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(
//                        loginD.getUserName(),null,authorities);
//                SecurityContextHolder.getContext().setAuthentication(authentication);
//                filterChain.doFilter(httpServletRequest,httpServletResponse);
//
//            }
//        }
//    }

    @Autowired
    private JwtTokenUtils jwtUtils;

    @Autowired
    private UserService userDetailsService;

//    private static final Logger logger = (Logger) LoggerFactory.getLogger(AuthenticationFilter.class);

    @Override
    protected void doFilterInternal ( HttpServletRequest request, HttpServletResponse response, FilterChain filterChain )
            throws ServletException, IOException {
        String username = null;
        String jwtToken = null;

        String token = request.getHeader(AUTHORIZATION);

        if (token !=null) {
            jwtToken = token.substring(7);
            username = jwtUtils.getUsernameFromToken(jwtToken);
            if (username != null
                    && SecurityContextHolder.getContext().getAuthentication() == null) {
                UserDetails userDetails = userDetailsService.loadUserByUsername(username);
                if (jwtUtils.validateToken(jwtToken, userDetails)) {
                    UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                    usernamePasswordAuthenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                    SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
                }
            }
        }
        filterChain.doFilter(request, response);// da qua dc phan authen
    }


}
