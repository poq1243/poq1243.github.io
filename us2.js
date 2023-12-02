function showPhotoAlbum(photoId) {
    // 각 폴더 파일 개수
    const numFile = [3, 3, 2];
    const nameFile = [
        'photo1.png', 'photo2.png', 'photo3.png', 'photo4.png', 'photo5.png',
        'photo6.png', 'photo7.png', 'photo8.png', 'photo9.png', 'photo10.png'
    ];png

    var imgSrc = '04_우리/사진첩/'; // 여기에 기본 이미지 경로를 설정하세요.
    // photoId에 따라 imgSrc를 변경합니다.
    const slider = document.getElementById('swiperWrapper');
    switch (photoId) {
        case 'photo1':
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
    const parent = document.getElementById('swiperWrapper');
    // 자식 노드 삭제
    parent.innerHTML = "";

    document.getElementById('photoAlbumOverlay').style.display = 'none';
    swiper.slideTo(0, 1, false)
}
