package com.vti.entity;

import org.springframework.security.core.GrantedAuthority;

public enum Role implements GrantedAuthority {
    ADMIN,USER;
// GrantedAuthority đại diện cho một quyền hoặc vai trò mà người dùng có thể có trong hệ thống.


//    định nghĩa bởi interface GrantedAuthority,trả về name của role
//    Role.ADMIN.getAuthority() sẽ trả về chuỗi "ADMIN".
    @Override
    public String getAuthority(){
        return name();
    }
}
