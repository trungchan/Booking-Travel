package com.vti.dto;
import lombok.*;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DestinationsDTO {
    private int id;
    private String name;
    private String status;
    private List<ToursDTO> tours;

    @Data
    @NoArgsConstructor
    static class ToursDTO {
        private int id;
        private String tourName;   }

}
