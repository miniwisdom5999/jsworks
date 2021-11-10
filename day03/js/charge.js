/*

    *나이
    8세 미만이면 "미취학아동", 8~13세이면 "초등학생",
    14~19세 "중, 고등학생", 20세이상 "일반인"

    *입장료
    - 미취학아동 : 1000원
    - 초등학생 : 2000원
    - 중학생 : 2500원
    - 고등학생 : 3000원
    
*/

//입력(저장) - 변수 생성
var age = prompt("나이를 입력하세요.", '5'); //나이
var chrage = 0; //입장료(초기화)



//처리 및 출력
if(age == null){
    document.write("입력이 취소되었습니다. ")
}
else{

    if(age < 8){
        document.write("<p>미취학 아동입니다.</p>");
        chrage = 1000;
    }
    else if(age >= 8 && age < 14){
        document.write("<p>초등 학생입니다.</p>");
        chrage = 2000;
    }
    else if(age >= 14 && age < 20){
        document.write("<p>중, 고등 학생입니다.</p>");
        chrage = 2500;
    }
    else if(age >= 20 && age < 80){
        document.write("<p>일반인 입니다.</p>");
        chrage = 3000;
    }
    else{
        document.write("<p>입력 범위를 초과하였습니다.</p>");
    }

}



document.write("입장료는 <span class='access'>" + chrage + "<p>원</span> 입니다.</p>");