$(document).ready(function () {
    $(".form-panel.two")
      .not(".form-panel.two.active")
      .on("click", function (e) {
        e.preventDefault();
        $(".form-toggle").addClass("visible");
        $(".form-panel.two").addClass("hidden");
        $(".form-panel.two").addClass("active");
      });
  
    $(".form-toggle").on("click", function (e) {
      e.preventDefault();
      $(this).removeClass("visible");
      $(".form-panel.two").removeClass("hidden");
      $(".form-panel.two").removeClass("active");
    });
  });
  
document.getElementById("server_error").style.display = "none";
  function githubmove(){
    location.href ='https://github.com/doongu/pk_selecter_pj';
  }
  function gitbookmove(){
    location.href ='https://doongu.gitbook.io/pk_selecter/';
  }
  function page1(){
    //첫페이지 링크 걸기
    location.href = 'http://127.0.0.1:5501/pkselect.html';
  }
  function page2(){
    // alert(json['lms_data'][1]['subject_name']);
        jQuery('#secondpage').show();
        jQuery('#mainpage').hide();
        var body = document.body;
        body.style.color="rgba(0, 0, 0, 1)";   
        body.style.backgroundColor= "rgba(0, 0, 0, 0.1)";
        body.style.fontWeight = "20";
        body.style.width = '100%';
        body.style.height = '100%';
        body.style.display = "inline";
        body.style.lineHeight = 'normal';
        var secondpage = document.getElementById("secondpage");
        secondpage.style.display = "flex";
        secondpage.style.justifyContent = center;
        secondpage.style.alignItems = center;
  }
  function loginmove() {
    document.getElementById("total").style.display = "none";
    document.getElementById("over").style.display = "block";
    document.body.style.backgroundColor = "white";
    document.body.style.lineHeight = "100px";
  }
  
  //달력//
  // fetch("http://3.36.76.134/").then((response => response.json()))
  // .then(json => { 
  //     if (json['status'] == 400) {
  //       alert(json["value"]);
  //     }
  //     else if (json['status'] == 200){
               
  //     }else{
  //      alert("서버 연결고창!");
  //     }
  //    })
  
  //테이블//
  let json = 
{
  "status": 200,
  "subject": [
    "과제구현및평가(캡스톤디자인Ⅱ)(105)",
    "데이터베이스(101)",
    "데이터베이스응용(102)",
    "데이터처리Ⅱ(102)",
    "리눅스프로그래밍(101)",
    "소프트웨어공학(102)",
    "시스템프로그래밍(102)",
    "프로그래밍언어론(101)",
    "2021RUN&LEARN부경팀프로젝트(01)"
  ],
  "lms_data": [
    {
      "subject_name": "과제구현및평가(캡스톤디자인Ⅱ)(105)",
      "class": "과제",
      "context": "학술발표논문제출(10월17일까지)",
      "date_deadline": "2021.10.17 오후 11:59"
    },
    {
      "subject_name": "데이터베이스(101)",
      "class": "수업",
      "context": "1차시 DB01-1",
      "date_deadline": "2021.09.07 오후 11:59"
    },
    {
      "subject_name": "데이터베이스응용(102)",
      "class": "수업",
      "context": "1차시 교재 5 장. ER을 이용한 데이터 모델링 (이론부분)",
      "date_deadline": "2021.10.12 오후 11:59"
    },
    {
      "subject_name": "데이터베이스응용(102)",
      "class": "수업",
      "context": "2차시 교재 3~4장 복습 (실습부분)",
      "date_deadline": "2021.10.12 오후 11:59"
    },
    {
      "subject_name": "데이터베이스응용(102)",
      "class": "수업",
      "context": "3차시 교재 3~4장 복습 (실습부분)",
      "date_deadline": "2021.10.12 오후 11:59"
    },
    {
      "subject_name": "데이터베이스응용(102)",
      "class": "과제",
      "context": "6주차 과제",
      "date_deadline": "2021.10.13 오후 11:59"
    },
    {
      "subject_name": "데이터베이스응용(102)",
      "class": "시험",
      "context": "5장 정리 퀴즈",
      "date_deadline": "2021.10.13 오후 11:59, 10분"
    },
    {
      "subject_name": "리눅스프로그래밍(101)",
      "class": "수업",
      "context": "1차시 3장 파일과 디렉토리 (1)",
      "date_deadline": "2021.10.18 오후 11:59"
    },
    {
      "subject_name": "리눅스프로그래밍(101)",
      "class": "과제",
      "context": "3장 파일과 디렉토리 (1)",
      "date_deadline": "2021.10.17 오후 11:59"
    },
    {
      "subject_name": "시스템프로그래밍(102)",
      "class": "수업",
      "context": "1차시 write() System Call",
      "date_deadline": "2021.10.13 오후 11:59"
    },
    {
      "subject_name": "시스템프로그래밍(102)",
      "class": "수업",
      "context": "2차시 Delayed writing",
      "date_deadline": "2021.10.13 오후 11:59"
    },
    {
      "subject_name": "시스템프로그래밍(102)",
      "class": "수업",
      "context": "5주 3차시 보강 I/O Synchronization",
      "date_deadline": "2021.10.13 오후 11:59"
    },
    {
      "subject_name": "프로그래밍언어론(101)",
      "class": "과제",
      "context": "프로그래밍언어론 Assignment#1",
      "date_deadline": "2021.10.13 오후 11:59"
    }
  ]
}; 

       //"[가상]과제구현및평가(캡스톤디자인Ⅱ)(105)"
       //alert(json['lms_data'][0]['subject_name']);
    if(json['status'] == 200){
    var T = Array.from(Array(3), () => new Array(5));
    T[0][0] = "수업"
    T[0][1] = "수강 과목"
    T[0][2] = "강의 주차"
    T[0][3] = "마감 기한"
    T[0][4] = 'tableL';
    
    T[1][0] = "과제"
    T[1][1] = "수강 과목"
    T[1][2] = "과제내용"
    T[1][3] = "제출기한"
    T[1][4] = 'tableHW';
    
    T[2][0] = "시험"
    T[2][1] = "수강 과목"
    T[2][2] = "시험시간"
    T[2][3] = "제출기한"
    T[2][4] = 'tableT';


    
    /*======테이블=======*/
    
      var row_1 = new Array(10000);
      var th = new Array(3);
    
      // th ) 강의 과목 , 강의 주차, 마감기한 //
      for(var i = 0; i < 3; i++){
        row_1[0] = document.createElement('tr');
        for (var p = 0; p < 3; p++) {
          th[p] = document.createElement('th');
          th[p].innerHTML = T[i][p + 1]
          document.getElementById(T[i][4]).appendChild(th[p]);
        }
     } 
    
       //lms_data 만큼 반복
      for(var j = 0; j < json['lms_data'].length; j++){
        for(var i = 0; i < 3; i++){
          if(json['lms_data'][j]['class'] == T[i][0]){
            //lms_data 길이 (열), 3행
            var td = Array.from(Array(json['lms_data'].length), () => new Array(3));
            //행 제작
            row_1[j] = document.createElement('tr');
            // td 3개 제작 ( 강의 과목 , 강의 주차, 마감기한에 들어갈 칸 )
            for (var p = 0; p < 3; p++) {
              td[j][p] = document.createElement('td');
            }
            if(j==0 ){
            td[j][0].innerHTML = json['lms_data'][j]['subject_name'];
            // "과제, 강의, 시험이면서 같은 과목명일 때"로 고쳐야함..
            }else if((json['lms_data'][j-1]['class'] == json['lms_data'][j]['class']) && (json['lms_data'][j-1]['subject_name'] == json['lms_data'][j]['subject_name'])){
              td[j][0].innerHTML = "";
            }else{
              td[j][0].innerHTML = json['lms_data'][j]['subject_name'];
            }
            if(json['lms_data'][j]['class'] == '시험'){
              var Test_deadline_before = json['lms_data'][j]['date_deadline'];
              var Test_deadline_after = Test_deadline_before.split(',');
              td[j][1].innerHTML = Test_deadline_after[1];
              td[j][2].innerHTML = Test_deadline_after[0];
            }else{
            td[j][1].innerHTML = json['lms_data'][j]['context'];
            td[j][2].innerHTML = json['lms_data'][j]['date_deadline'];
            }
            // tableL에 row_1[j] tag 넣기
            document.getElementById(T[i][4]).appendChild(row_1[j]);
            // row_1[j]에 td[j][p] 넣기
            for (var p = 0; p < 3; p++) {
              row_1[j].appendChild(td[j][p]);
            }
          }
        }
     }
    }else if(json['status']== 400){
      alert_failed = document.createElement('div');
      alert_failed.innerHTML = "아이디 또는 비밀번호가 잘못 입력 되었습니다. <br> 아이디와 비밀번호를 정확히 입력해 주세요.";
      alert_failed.style.color = "red"
      alert_failed.style.textAlign = "center"
      alert_failed.style.marginTop = "10px"
      alert_failed.style.marginBottom = "10px"
      jQuery('#server_error').appendChild(alert_failed);
    }else if(json['status']== 500){
      jQuery('#server_error').show();
      // document.getElementById("mainpage").style.backgroundColor = "";
    }
