//나이를 계산하는 프로그램
function calcAge(){
    //현재년도, 출생년도 입력
    const CURRENT_YEAR = 2021; //상수!!
    var birthYear = prompt("출생년도를 입력하세요 ");
    var age;
    
    //계산
    age =  CURRENT_YEAR - birthYear + 1
    

    //출력
    document.getElementById("result").innerHTML = "나이는 " + age + "세 입니다.";
}