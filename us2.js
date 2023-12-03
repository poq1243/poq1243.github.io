function showPhotoAlbum(photoId) {
    // 각 폴더 파일 개수
    const numFile = [3, 3, 2];
    const nameFile = [
        'photo1.png', 'photo2.png', 'photo3.png', 'photo4.png', 'photo5.png',
        'photo6.png', 'photo7.png', 'photo8.png', 'photo9.png', 'photo10.png'
    ];
    const subAlbum = [
        '따스한 우리의 봄, 모교에서 추억하다.',
        '따스한 우리의 봄, 모교에서 안뇽.',
        '따스한 우리의 봄, 모교에서 오예.'
    ];
    const textAlbum = [
        '신부 혜진이가 태어난 봄에, 우리의 추억이 묻어 있는 모교 한국항공대학교에서 첫 웨딩 사진을 촬영했습니다🩵',
        '신부 혜진이가 태어난 봄에, 우리의 추억이 묻어 있는 봄이지롱롱🩵',
        '신부 혜진이가 태어난 봄에, 우리의 추억이 묻어 있는 우야옹🩵'
    ];

    const slider = document.getElementById('swiperWrapper');
    const subContainer = document.getElementById('subContainer');
    const textContainer = document.getElementById('textContainer');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    switch (photoId) {
        case 'photo1':
            p1.textContent = subAlbum[0];
            subContainer.appendChild(p1);
            p2.textContent = textAlbum[0];
            textContainer.appendChild(p2);

            for (var i = 0; i < numFile[0]; i++) {
                const slide = document.createElement('div');
                slide.className = 'swiper-slide';

                const img = document.createElement('img');
                img.src = '04_우리/사진첩/1/' + nameFile[i];
                img.alt = 'Wedding Photo'+i;  

                slide.appendChild(img);
                slider.appendChild(slide);
            }
            break;
        case 'photo2':
            p1.textContent = subAlbum[1];
            subContainer.appendChild(p1);
            p2.textContent = textAlbum[1];
            textContainer.appendChild(p2);

            for (var i = 0; i < numFile[1]; i++) {
                const slide = document.createElement('div');
                slide.className = 'swiper-slide';

                const img = document.createElement('img');
                img.src = '04_우리/사진첩/2/' + nameFile[i];
                img.alt = 'Wedding Photo' + i;

                slide.appendChild(img);
                slider.appendChild(slide);
            }
            break;
        case 'photo3':
            p1.textContent = subAlbum[2];
            subContainer.appendChild(p1);
            p2.textContent = textAlbum[2];
            textContainer.appendChild(p2);

            for (var i = 0; i < numFile[2]; i++) {
                const slide = document.createElement('div');
                slide.className = 'swiper-slide';

                const img = document.createElement('img');
                img.src = '04_우리/사진첩/3/' + nameFile[i];
                img.alt = 'Wedding Photo' + i;

                slide.appendChild(img);
                slider.appendChild(slide);
            }
            break;
    }
    // 이미지 소스를 업데이트하고 오버레이를 보여줍니다.
    // document.getElementById('albumPhoto').src = imgSrc;
    document.getElementById('photoAlbumOverlay').style.display = 'block';
}

function closePhotoAlbum() {
    // 부모 노드 선택
    const parentSwiper = document.getElementById('swiperWrapper');
    const parentSubject = document.getElementById('subContainer');
    const parenttext = document.getElementById('textContainer');
    
    // 자식 노드 삭제
    parentSwiper.innerHTML = "";
    parentSubject.innerHTML = "";
    parenttext.innerHTML = "";

    document.getElementById('photoAlbumOverlay').style.display = 'none';
    swiper.slideTo(0, 1, false)
}
