/*
    'y'키를 누르면 "계속 반복"
    'n'키를 누르면 "반복 중단"
    그 외의 키는 "잘못 입력"
    
    while ~ if ~ break (반복 조건문)
    */

    while(true){
        //입력
        var key = prompt("계속 반복할까요?", "y/n, n = 종료");

        //처리

        if(key == 'y' || key == 'Y'){
            alert("계속 반복합니다." );
        }
        else if(key == 'n' || key == 'N'){
            alert("반복을 중단합니다");
            break;
            
        }
        else{
            alert("잘못 입력 하였습니다")
        }

    }
    document.write("프로그램 종료!");