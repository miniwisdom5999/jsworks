 //입장객 수에 따른 좌석의 줄 수 계산하기
        //변수 생성
        var customerNum = prompt("입장객은 몇 명인가요?");  //입장객
        var columnNum = prompt("한 줄에 몇 명 앉나요?");     //열
        var rowNum = 0;        //줄(행)

        // 처리 : 좌석 줄(행) 수 = 입장객 / 좌석 열 수

        // rowNum = customerNum / columnNum;

        if(customerNum % columnNum == 0){ //나누어 떨어지면
            rowNum = customerNum / columnNum;
        }
        else{ //나머지가 있으면
            rowNum = parseInt (customerNum / columnNum) + 1;
        }
        //parseInt() - 정수로 변환하는 함수

        //출력
        // document.write(rowNum + "개의 줄이 필요합니다.");

        //중첩 for로 자리 배치
        for(var i = 0; i < rowNum; i++){
            for(var j = 1; j <= columnNum; j++){
                var seatNum = i * columnNum + j; //예 입장객(33) 자리(33)
                if(seatNum > customerNum) break;
                document.write(seatNum + " ");
                
            }
            document.write("<br>");
        }