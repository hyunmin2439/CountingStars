package com.ssafy.cstars.api.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class Request {
    private String recipientPhoneNumber;
    private String title;
    private String content;

}
