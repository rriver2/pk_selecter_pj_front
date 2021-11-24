json = {
    "status": 200,
    "subject": [
        "[가상]과제구현및평가(캡스톤디자인Ⅱ)(105)",
        "[가상]데이터베이스(101)",
        "[가상]데이터베이스응용(102)",
        "[가상]데이터처리Ⅱ(102)",
        "[가상]리눅스프로그래밍(101)",
        "[가상]소프트웨어공학(102)",
        "[가상]시스템프로그래밍(102)",
        "[가상]프로그래밍언어론(101)",
        "[부경대]2021RUN&LEARN부경팀프로젝트(01)"
    ],
    "lms_data": [{
            "subject_name": "[가상]과제구현및평가(캡스톤디자인Ⅱ)(105)",
            "class": "과제",
            "context": "학술발표논문제출(10월17일까지)",
            "date_deadline": "2021.11.24 오후 11:59"
        },
        {
            "subject_name": "[가상]데이터베이스(101)",
            "class": "수업",
            "context": "1차시 DB01-1",
            "date_deadline": "2021.11.24 오후 11:59"
        },
        {
            "subject_name": "[가상]데이터베이스응용(102)",
            "class": "수업",
            "context": "1차시 교재 5 장. ER을 이용한 데이터 모델링 (이론부분)",
            "date_deadline": "2021.11.12 오후 11:59"
        },
        {
            "subject_name": "[가상]데이터베이스응용(102)",
            "class": "수업",
            "context": "2차시 교재 3~4장 복습 (실습부분)",
            "date_deadline": "2021.11.12 오후 11:59"
        },
        {
            "subject_name": "[가상]데이터베이스응용(102)",
            "class": "수업",
            "context": "3차시 교재 3~4장 복습 (실습부분)",
            "date_deadline": "2021.11.12 오후 11:59"
        },
        {
            "subject_name": "[가상]데이터베이스응용(102)",
            "class": "과제",
            "context": "6주차 과제",
            "date_deadline": "2021.11.13 오후 11:59"
        },
        {
            "subject_name": "[가상]데이터베이스응용(102)",
            "class": "시험",
            "context": "5장 정리 퀴즈",
            "date_deadline": "2021.11.13 오후 11:59, 10 분"
        },
        {
            "subject_name": "[가상]리눅스프로그래밍(101)",
            "class": "수업",
            "context": "1차시 3장 파일과 디렉토리 (1)",
            "date_deadline": "2021.11.18 오후 11:59"
        },
        {
            "subject_name": "[가상]리눅스프로그래밍(101)",
            "class": "과제",
            "context": "3장 파일과 디렉토리 (1)",
            "date_deadline": "2021.11.17 오후 11:59"
        },
        {
            "subject_name": "[가상]시스템프로그래밍(102)",
            "class": "수업",
            "context": "1차시 write() System Call",
            "date_deadline": "2021.11.23 오후 11:59"
        },
        {
            "subject_name": "[가상]시스템프로그래밍(102)",
            "class": "수업",
            "context": "2차시 Delayed writing",
            "date_deadline": "2021.11.25 오후 11:59"
        },
        {
            "subject_name": "[가상]시스템프로그래밍(102)",
            "class": "수업",
            "context": "5주 3차시 보강 I/O Synchronization",
            "date_deadline": "2021.11.21 오후 11:59"
        },
        {
            "subject_name": "[가상]프로그래밍언어론(101)",
            "class": "과제",
            "context": "프로그래밍언어론 Assignment#1",
            "date_deadline": "2021.11.23 오후 11:59"
        }
    ]
}
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

function githubmove() {
    location.href = 'https://github.com/doongu/pk_selecter_pj';
}

function gitbookmove() {
    location.href = 'https://doongu.gitbook.io/pk_selecter/';
}

function page1() {
    window.location.reload();
}
// login 실패 함수
function alertStatus400() {
    document.querySelector("#endregiontotal").style.display = "block";
    document.querySelector("#loadingpage").style.display = "none";
    document.body.style.backgroundColor = "#ebebeb";
    $('#server_error').show();
    document.querySelector("#server_error").style.display = "flex";
    document.body.style.lineHeight = "1.6em";
    document.querySelector("#server_error_inner").innerHTML = "비밀번호가 틀렸습니다. <br>다시 입력해 주세요 :)"
}

function alertStatus500() {
    document.getElementById("total").style.display = "block";
    document.getElementById("loadingpage").style.display = "none";
    document.getElementById("server_error").style.display = "flex";
    document.body.style.backgroundColor = "#ebebeb";
    $('#server_error').show();
    document.body.style.lineHeight = "1.6em";
    document.getElementById("server_error_inner").innerHTML = "서버 에러가 발생했습니다."
}
// 로딩 화면
function ShowLoadingPage() {
    $('#total').hide();
    $('#loadingpage').show();
    document.body.style.backgroundColor = "white";
    document.body.style.lineHeight = "100px";
}

// delectBtn = document.querySelector(".delectBtn");
// classfilterBtn = document.querySelector(".classfilterBtn");
// ddayBtn = document.querySelector(".ddayBtn");

// delectBtn.addEventListener('click', () => ondelectBtnClick());

// function ondelectBtnClick() {
//     let today = getToday();

//     let compareanswertoday = json['lms_data']['date_deadline'].split(' ');
//     let middlestep = compareanswertoday[0].split('.');

//     json = json['lms_data'];
//     json = json.filter((json['date_deadline']));
// }



loginmove();

function loginmove() {
    // fetch("/login", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //             pk_user_id: document.getElementById("username").value,
    //             pk_user_pw: document.getElementById("password").value,
    //         }),
    //     }).then((response => response.json()))
    //     .then(json => {
    if (json['status'] == 400) {
        status400();
    } else if (json['status'] == 500) {
        status500();
    } else if (json['status'] == 200) {
        showCalender(json);
        showtable(json);
    }

    // json['status'] == 200 일 때 테이블 및 달력 show
    function showCalender(json) {
        const init = {
            monList: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            dayList: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            today: new Date(),
            monForChange: new Date().getMonth(),
            activeDate: new Date(),
            getFirstDay: (yy, mm) => new Date(yy, mm, 1),
            getLastDay: (yy, mm) => new Date(yy, mm + 1, 0),
            nextMonth: function () {
                let d = new Date();
                d.setDate(1);
                d.setMonth(++this.monForChange);
                this.activeDate = d;
                return d;
            },
            prevMonth: function () {
                let d = new Date();
                d.setDate(1);
                d.setMonth(--this.monForChange);
                this.activeDate = d;
                return d;
            },
            addZero: (num) => (num < 10) ? '0' + num : num,
            activeDTag: null,
            getIndex: function (node) {
                let index = 0;
                while (node = node.previousElementSibling) {
                    index++;
                }
                return index;
            }
        };

        const $calBody = document.querySelector('.cal-body');
        const $btnNext = document.querySelector('.btn-cal.next');
        const $btnPrev = document.querySelector('.btn-cal.prev');

        /**
         * @param {number} date
         * @param {number} dayIn
         */

        function loadDate(current_month, date, dayIn) {
            document.querySelector('.cal-day').textContent = current_month + "월 " + date + "일 (" + init.dayList[dayIn] + ")";
        }

        /**
         * @param {date} fullDate
         */

        let current_month;
        let current_year;

        function loadYYMM(fullDate) {
            let yy = fullDate.getFullYear();
            let mm = fullDate.getMonth();
            let firstDay = init.getFirstDay(yy, mm);
            let lastDay = init.getLastDay(yy, mm);
            let markToday; // for marking today date

            if (mm === init.today.getMonth() && yy === init.today.getFullYear()) {
                markToday = init.today.getDate();
            }
            document.querySelector('.cal-month').textContent = init.monList[mm];
            current_month = mm + 1;
            document.querySelector('.cal-year').textContent = yy;

            let trtd = '';
            let upload_trtd = '';
            let startCount;
            let countDay = 0;
            let tr_count = 0;

            for (let i = 0; i < 6; i++) {

                trtd += '<tr>';
                for (let j = 0; j < 7; j++) {
                    if (i === 0 && !startCount && j === firstDay.getDay()) {
                        startCount = 1;
                    }
                    if (!startCount) {
                        trtd += '<td>';
                    } else {
                        let fullDate = yy + '.' + init.addZero(mm + 1) + '.' + init.addZero(countDay + 1);
                        trtd += '<td class="day';
                        trtd += (markToday && markToday === countDay + 1) ? ' today" ' : '"';
                        trtd += ` data-date="${countDay + 1}" data-fdate="${fullDate}">`;
                    }
                    trtd += (startCount) ? ++countDay : '';
                    trtd += circle_marked(countDay, yy, startCount);
                    if (countDay === lastDay.getDate()) {
                        startCount = 0;
                        tr_count++;
                    }
                    trtd += '</td>';
                }
                trtd += '</tr>';
                if (tr_count <= 7) {
                    upload_trtd += trtd;
                    trtd = "";
                }
            }

            $calBody.innerHTML = upload_trtd;
            current_year = yy;
        }

        function circle_marked(countDay, yy, startCount) {
            for (let j = 0; j < json['lms_data'].length; j++) {
                let deadline_before = json['lms_data'][j]['date_deadline'];
                let deadline_date = deadline_before.substr(8, 2);
                let deadline_month = deadline_before.substr(5, 2);
                let deadline_year = deadline_before.substr(0, 4);
                if (deadline_date == countDay && deadline_month == current_month && deadline_year == yy && startCount != 0) {
                    return "<div id = circle1></div>";
                }
            }
            return "<div id = circle2></div>";
        }

        let count = 0;

        function loadcontexts(date) {
            let Content = new Array(1000)
            for (let j = 0; j < json['lms_data'].length; j++) {
                let deadline_before = json['lms_data'][j]['date_deadline'];
                let deadline_date = deadline_before.substr(8, 2);
                let deadline_month = deadline_before.substr(5, 2);
                let deadline_year = deadline_before.substr(0, 4);
                if (deadline_date == date && deadline_month == current_month && deadline_year == current_year) {
                    Content[j] = document.createElement('div');
                    Content[j].id = 'content'
                    let Subject_name = json['lms_data'][j]['subject_name'].split(']');
                    Content[j].innerHTML = json['lms_data'][j]['class'] + ": " + Subject_name[1] + "<br>" + json['lms_data'][j]['context'];
                    document.getElementById('Context-box').appendChild(Content[j]);
                    count++;
                }
            }
            document.getElementById('Context-box').style.overflowY = "auto";
        }

        function removecontexts() {
            if (count != 0) {
                for (let i = 0; i < count; i++) {
                    let removecontext = document.getElementById('content');
                    removecontext.remove();
                }
            }
            count = 0;
        }

        /**
         * @param {string} val
         */

        loadYYMM(init.today);
        loadDate(init.today.getMonth(), init.today.getDate(), init.today.getDay());

        $btnNext.addEventListener('click', () => loadYYMM(init.nextMonth()));
        $btnPrev.addEventListener('click', () => loadYYMM(init.prevMonth()));

        // 날짜 눌렀을 때 !
        $calBody.addEventListener('click', (e) => {
            if (e.target.classList.contains('day')) {
                if (init.activeDTag) {
                    init.activeDTag.classList.remove('day-active');
                }
                let day = Number(e.target.textContent);
                loadDate(current_month, day, e.target.cellIndex);
                removecontexts();
                loadcontexts(day);
                e.target.classList.add('day-active');
                init.activeDTag = e.target;
                init.activeDate.setDate(day);
                document.getElementById("clicked-date").style.display = "block";
            }
        });
    }

    function showtable(json) {
        class Deque {
            constructor() {
                this.arr = [];
                this.head = 0;
                this.tail = 0;
            }

            push_front(item) {
                if (this.arr[0]) {
                    for (let i = this.arr.length; i > 0; i--) {
                        this.arr[i] = this.arr[i - 1];
                    }
                }
                this.arr[this.head] = item;
                this.tail++;
            }
            push_back(item) {
                this.arr[this.tail++] = item;
            }
            pop_front() {
                if (this.head >= this.tail) {
                    return null;
                } else {
                    const result = this.arr[this.head++];
                    return result;
                }
            }
            pop_back() {
                if (this.head >= this.tail) {
                    return null;
                } else {
                    const result = this.arr[--this.tail];
                    return result;
                }
            }
        }

        let Table = Array.from(Array(3), () => new Array(5));
        Table[0][0] = "수업"
        Table[0][1] = "수강 과목"
        Table[0][2] = "강의 주차"
        Table[0][3] = "마감 기한"
        Table[0][4] = 'tableL';

        Table[1][0] = "과제"
        Table[1][1] = "수강 과목"
        Table[1][2] = "과제내용"
        Table[1][3] = "제출기한"
        Table[1][4] = 'tableHW';

        Table[2][0] = "시험"
        Table[2][1] = "수강 과목"
        Table[2][2] = "시험시간"
        Table[2][3] = "제출기한"
        Table[2][4] = 'tableT';




        /*======테이블=======*/
        let lms_data_json = new Array(json['lms_data'].length)

        for (let i = 0; i < json['lms_data'].length; i++) {
            lms_data_json[i] = json['lms_data'][i]
        }
        //강의, 과제, 시험 별로 분류
        let subject = new Array(3)

        for (let s = 0; s < 3; s++) {
            subject[s] = new Array(0)
        }


        for (let i = 0; i < lms_data_json.length; i++) {
            if (lms_data_json[i]['class'] == '수업') {
                subject[0].push(lms_data_json[i])
            } else if (lms_data_json[i]['class'] == '과제') {
                subject[1].push(lms_data_json[i])
            } else {
                subject[2].push(lms_data_json[i])
            }
        }



        //날짜 순으로 정렬
        for (let s = 0; s < 3; s++) {
            subject[s] = subject[s].sort((a, b) => {
                if (a['date_deadline'] > b['date_deadline']) {
                    return 1;
                } else if (a['date_deadline'] < b['date_deadline']) {
                    return -1;
                }
            })
        }


        let list_sequence = new Array(3);
        for (let s = 0; s < 3; s++) {
            list_sequence[s] = new Array(0);
            list_sequence[s] = subject[s].map(function (Subject_name) {
                // arr : subject_name만 추출
                return Subject_name['subject_name'];
            }).filter(function (Subject_name, index, arr) {
                // arr.indexOf(Subject_name): arr에 속하는 Subject_name의 인덱스가 
                // 지금 계산 중인 엔덱스와 같으면 반환
                return arr.indexOf(Subject_name) === index;
            });
        }

        let list_sequence_deque = new Array(3)
        let len_deque = new Array(3)
        let answer = new Array(3)
        for (let s = 0; s < 3; s++) {
            list_sequence_deque[s] = new Deque
            for (let i = 0; i < list_sequence[s].length; i++) {
                list_sequence_deque[s].push_back(list_sequence[s][i])
            }
            len_deque[s] = list_sequence_deque[s]['arr'].length
            answer[s] = new Array()

            for (let i = 0; i < len_deque[s]; i++) {
                let current_subject = list_sequence_deque[s].pop_front()
                for (let j = 0; j < subject[s].length; j++) {
                    if (current_subject == subject[s][j]['subject_name']) {
                        answer[s].push(subject[s][j])
                    } else {
                        continue;
                    }
                }
            }
        }

        let row_1 = new Array(10000);
        let row
        let th = new Array(3);
        // th ) 강의 과목 , 강의 주차, 마감기한 //
        for (let i = 0; i < 3; i++) {
            row_1[0] = document.createElement('tr');
            if (answer[i].length == 0) {
                row = document.createElement('tr');
                continue;
            } else {
                for (let p = 0; p < 3; p++) {
                    th[p] = document.createElement('th');
                    th[p].innerHTML = Table[i][p + 1]
                    document.getElementById(Table[i][4]).appendChild(th[p]);
                }
            }
        }



        for (let i = 0; i < 3; i++) {
            //lms_data 길이 (열), 3행
            let td = Array.from(Array(answer[i].length), () => new Array(3));
            if (answer[i].length == 0) {
                let td1
                row = document.createElement('tr');
                td1 = document.createElement('td');
                td1.innerHTML = "모두 완료하셨습니다 :)";
                document.getElementById(Table[i][4]).appendChild(row);
                row.appendChild(td1);
            } else {
                for (let k = 0; k < answer[i].length; k++) {
                    if (answer[i][k]['class'] == Table[i][0]) {
                        //행 제작
                        row_1[k] = document.createElement('tr');
                        // td 3개 제작 ( 강의 과목 , 강의 주차, 마감기한에 들어갈 칸 )
                        for (let p = 0; p < 3; p++) {
                            td[k][p] = document.createElement('td');
                        }
                        if (k == 0) {
                            let Subject_name = answer[i][k]['subject_name'].split(']');
                            td[k][0].innerHTML = Subject_name[1];
                        } else if (answer[i][k - 1]['subject_name'] == answer[i][k]['subject_name']) {
                            td[k][0].innerHTML = "";
                        } else {
                            let Subject_name = answer[i][k]['subject_name'].split(']');
                            td[k][0].innerHTML = Subject_name[1];
                        }
                        if (answer[i][k]['class'] == '시험') {
                            let Test_deadline_before = answer[i][k]['date_deadline'];
                            let Test_deadline_after = Test_deadline_before.split(', ');
                            td[k][1].innerHTML = Test_deadline_after[1];
                            let deadline = Test_deadline_after[0].split(' ')
                            td[k][2].innerHTML = deadline[0] + "<br>" + deadline[1] + " " + deadline[2];
                        } else {
                            td[k][1].innerHTML = answer[i][k]['context'];
                            let deadline = answer[i][k]['date_deadline'].split(' ')
                            td[k][2].innerHTML = deadline[0] + "<br>" + deadline[1] + " " + deadline[2];
                        }

                        function getToday() {
                            var date = new Date();
                            var year = date.getFullYear();
                            var month = ("0" + (1 + date.getMonth())).slice(-2);
                            var day = ("0" + date.getDate()).slice(-2);

                            return year + "." + month + "." + day;
                        }
                        let today = getToday();

                        let compareanswertoday = answer[i][k]['date_deadline'].split(' ');
                        let middlestep = compareanswertoday[0].split('.');
                        let compareanswertomorrow = middlestep[0] + "." + middlestep[1] + "." + (parseInt(middlestep[2]) + 1);

                        if (today === compareanswertoday[0] || today === compareanswertomorrow) {
                            marktodayitem(td[k][1], td[k][2]);
                        }

                        function marktodayitem(task, date) {
                            // td[k][1],td[k][2]
                            task.style.color = `var(--color-${Table[i][4]})`;
                            task.style.fontWeight = "bold";
                            date.style.color = `var(--color-${Table[i][4]})`;
                            date.style.fontWeight = "bold";
                        }

                        document.getElementById(Table[i][4]).appendChild(row_1[k]);
                        for (let p = 0; p < 3; p++) {
                            row_1[k].appendChild(td[k][p]);
                        }
                    }
                }
            }
            $('#secondpage').show();
            $('#mainpage').hide();
            let body = document.body;
            body.style.color = "rgba(0, 0, 0, 1)";
            body.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
            body.style.fontWeight = "20";
            body.style.width = '100%';
            body.style.height = '100%';
            body.style.display = "inline";
            body.style.lineHeight = 'normal';
            let secondpage = document.getElementById("secondpage");
            secondpage.style.display = "flex";
        }

    }
}