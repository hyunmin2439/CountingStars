package com.ssafy.cstars.api.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

/**
 * 공지사항 API ([Put] /noticle/{notice_id}) 요청에 필요한 리퀘스트 바디 정의.
 */
@Getter
@Setter
@ApiModel("NoticePutReq")
public class NoticePutReq {
    @ApiModelProperty(name="공지사항 번호")
    Long noticeId;
    @ApiModelProperty(name="관리자 id")
    Long adminId;
    @ApiModelProperty(name="공지사항 제목")
    String title;
    @ApiModelProperty(name="공지사항 내용")
    String content;
}
