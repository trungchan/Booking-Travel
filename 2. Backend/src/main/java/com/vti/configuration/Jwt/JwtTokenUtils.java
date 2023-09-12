package com.vti.configuration.Jwt;

import com.alibaba.fastjson.JSON;
import com.vti.configuration.Exception.AppException;
import com.vti.dto.LoginD;
import com.vti.entity.Role;
import com.vti.entity.Token;
import com.vti.repository.TokenRepository;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Slf4j
@Component
public class JwtTokenUtils {
    private  static final long EXPIRATION = 864000000;
    private  static final String SECRET =  "123456";
//    PREFIX_TOKEN (tiền tố thường được sử dụng trong header của mã thông báo để chỉ ra loại mã thông báo),
    private static final String PREFIX_TOKEN = "Bearer";
    private static final String Authorization = "Authorization";

    @Autowired
    private TokenRepository tokenRepository;




//     tao moi token
    public String CreateAccessToken( LoginD loginD ){
        Date expirationDate = new Date(System.currentTimeMillis()+EXPIRATION);
        String token = Jwts.builder()
                .setId(String.valueOf(loginD.getId()))
                .setSubject(loginD.getUserAgent())
                .setIssuedAt(new Date())
                .setIssuer("VTI")
                .setExpiration(expirationDate)
                .signWith(SignatureAlgorithm.HS512, SECRET)
                .claim("authorities",loginD.getRole().name())
                .claim("user-Agent",loginD.getUserAgent()).compact();
        Token tokenEntity = new Token();
        tokenEntity.setToken(token);
        tokenEntity.setExpiration(expirationDate);
        tokenEntity.setUserAgent(loginD.getUserAgent());
        tokenRepository.save(tokenEntity);
        return token;
    }

        // giai ma token
    public LoginD parseAccessToken(String token){
        LoginD loginD = new LoginD();
        if (!token.isEmpty()){
            try {
                token = token.replace(PREFIX_TOKEN,"").trim();
                Claims claims = Jwts.parser()
                        .setSigningKey(SECRET)
                        .parseClaimsJws(token).getBody();
                // lay ra thong tin
                String user = claims.getSubject();
                Role role = Role.valueOf(claims.get("authorities").toString());
                String userAgent = claims.get("user-Agent").toString();

                loginD.setUserName(user);
                loginD.setRole(role);
                loginD.setUserAgent(userAgent);
            }catch (Exception e){
                log.error(e.getMessage());
            }
        }return loginD;
    }

//    public  boolean checkToken ( String token, HttpServletResponse response, HttpServletRequest httpServletRequest ){
//        try{
//            if (StringUtils.isBlank(token)||!token.startsWith(PREFIX_TOKEN)){
//                responseJson(response,new AppException("token khong hop le ",401,httpServletRequest.getRequestURI()));
//                return false;
//            }
//            token = token.replace(PREFIX_TOKEN,"").trim();
//            Token tokenEntity = tokenRepository.findByToken(token);
//            if (tokenEntity==null){
//                responseJson(response,new AppException("token khong ton tai",401,httpServletRequest.getRequestURI()));
//                return false;
//            }
//            if (tokenEntity.getExpiration().after(new Date(System.currentTimeMillis()+EXPIRATION))){
//                responseJson(response,new AppException("token het hieu luc",401,httpServletRequest.getRequestURI()));
//                return false;
//            }
//        }catch (Exception e){
//            responseJson(response,new AppException(e.getMessage(),401,httpServletRequest.getRequestURI()));
//            return false;
//        }
//        return true;
//    }
//    private void responseJson( HttpServletResponse response, AppException exception ){
//        response.setCharacterEncoding("UTF-8");
//        response.setContentType("application/json");
//        response.setStatus(exception.getCode());
//        try{
//            response.getWriter().print(JSON.toJSONString(exception));
//        } catch (IOException e) {
//            log.debug(e.getMessage());
//            throw new RuntimeException(e);
//        }
//    }
/////////////////////////////////////////////////////////////

    //retrieve username from jwt token
    public String getUsernameFromToken(String token) {
        return getClaimFromToken(token, Claims::getSubject);
    }

    //retrieve expiration date from jwt token
    public Date getExpirationDateFromToken(String token) {
        return getClaimFromToken(token, Claims::getExpiration);
    }

    public <T> T getClaimFromToken(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = getAllClaimsFromToken(token);
        return claimsResolver.apply(claims);
    }
    //for retrieveing any information from token we will need the secret key
    private Claims getAllClaimsFromToken(String token) {
        return Jwts.parser().setSigningKey(SECRET).parseClaimsJws(token).getBody();
    }

    //check if the token has expired
    private Boolean isTokenExpired(String token) {
        final Date expiration = getExpirationDateFromToken(token);
        return expiration.before(new Date());
    }

    //generate token for user
    public String generateToken( UserDetails userDetails) {
        Map<String, Object> claims = new HashMap<>();
        return doGenerateToken(claims, userDetails.getUsername());
    }
    //while creating the token -
    //1. Define  claims of the token, like Issuer, Expiration, Subject, and the ID
    //2. Sign the JWT using the HS512 algorithm and secret key.
    //3. According to JWS Compact Serialization(https://tools.ietf.org/html/draft-ietf-jose-json-web-signature-41#section-3.1)
    //   compaction of the JWT to a URL-safe string
    private String doGenerateToken(Map<String, Object> claims, String subject) {

        return Jwts.builder().setClaims(claims).setSubject(subject).setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION))// 10 ngay
                .signWith(SignatureAlgorithm.HS512, SECRET).compact();
    }

    //validate token
    public Boolean validateToken(String token, UserDetails userDetails) {
        // lay username tu token
        final String username = getUsernameFromToken(token);
        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }
}
