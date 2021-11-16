//상세 설명 보기
function showText(){
    document.getElementById("desc").style.display = "block"
    //html파일에서 none으로 글을 안보이게 했다.
    // 연결을 위해 아이디를 부여했고 style에서 display를 block으로 바꿔줬음.
}


//상세 설명 닫기
function hideText(){
    document.getElementById("desc").style.display = "none"
}