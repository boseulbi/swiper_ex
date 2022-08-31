const swiper = new Swiper("main", {
        speed: 500,  //swiper 패널이 넘어가는 속도 0.5s
        loop: true, //swiper 패너를 순환
        direction: "horizontal", //vertical 세로방향
        grabCursor: true,
        slidesPerView: "auto", // 숫자 해당갯수단위로 패널보임, "auto": 100%, 특정크기지정
        spaceBetween: 30, //패널사이간격
        centeredSlides: true, //활성화 패널을 항상 가로 가운데 배치
    });