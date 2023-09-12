package com.vti.configuration.Exception;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import java.time.Instant;

@Data
@JsonIgnoreProperties({"stackTrace","cause","suppressed","localizedMessage"})
public class AppException extends RuntimeException {

    private Instant timeInstant;
    private String message;
    private  int code;
    private String path;
    public AppException(Exception exception){
        this.code=500;
        this.message = exception.getMessage();
        this.timeInstant = Instant.now();
    }
    public AppException(Error error){
        this.code=error.getStatus().value();
        this.message = error.getMessage();
        this.timeInstant = Instant.now();
    }

    public AppException ( String message, int code, String path ) {
        this.message= message;
        this.code= code;
        this.path= path;
        this.timeInstant = Instant.now();
    }


}
