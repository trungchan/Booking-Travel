package com.vti.dto;
import com.vti.entity.Tours;
import lombok.*;

import java.util.List;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class DeparturesDTO {
    private int id;
    private String name;
    private List<ToursDTO> tours;

    @Data
    @NoArgsConstructor
    static class ToursDTO {
        private int id;
        private String tourName;   }

}
