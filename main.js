const swiper = new Swiper("main", {
        speed: 500,  //swiper 패널이 넘어가는 속도 0.5s
        loop: true, //swiper 패너를 순환
        direction: "horizontal", //vertical 세로방향
        grabCursor: true,
        slidesPerView: "auto", // 숫자 해당갯수단위로 패널보임, "auto": 100%, 특정크기지정
        spaceBetween: 30, //패널사이간격
        centeredSlides: true, //활성화 패널을 항상 가로 가운데 배치
        pagination: {
            el: ".swiper-pagination",
            //clickable: true
            type: "fraction"//패널쪽수로
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        effect: "coverflow",
        coverflowEffect: {
            rotate: 50,//y축 회전각도
            stretch: -100,//당겨짐 정도
            depth: 400,//입체적인 왜곡효과정도
            slideShadows: false //패널의 그림자설정
        }   
    });