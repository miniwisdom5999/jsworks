//상세 설명 보기
function showText(){
    document.getElementById("desc").style.display = "block"
    //html파일에서 none으로 글을 안보이게 했다.
    // 연결을 위해 아이디를 부여했고 style에서 display를 block으로 바꿔줬음.

    //보기버튼 숨기기
    document.getElementById("open").style.display = "none"
    //버튼을 숨기기 위한 아이디를 부여하고 상세설명보기 눌렀을때 사라지게 했음.
}



//상세 설명 닫기
function hideText(){
    document.getElementById("desc").style.display = "none"

    //보기버튼 숨기기
    document.getElementById("open").style.display = "block"
}