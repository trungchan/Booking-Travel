package com.vti.configuration.Exception;

import org.springframework.http.HttpStatus;

public enum Error {
    LOGIN_USERNAME(HttpStatus.NOT_FOUND,"username khong ton tai"),
    LOGIN_PASSWORD(HttpStatus.NOT_FOUND,"username khong ton tai");
    public final HttpStatus status;
    public final String message;
   Error(HttpStatus status,String message){
       this.status = status;
       this.message = message;
   }

    public HttpStatus getStatus () {
        return status;
    }

    public String getMessage () {
        return message;
    }
}
