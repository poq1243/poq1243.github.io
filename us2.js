function showPhotoAlbum(photoId) {
    // 각 폴더 파일 개수
    const numFile = [8, 2, 8, 5, 6];
    const nameFile = [
        '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg',
        '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg'
    ];
    const subAlbum = [
        '따스한 우리의 봄, 모교에서 추억하다',
        '따스한 우리의 봄, 모교에서 안뇽.',
        '장거리 연애 시작, 우리의 첫 광주 봄나들이',
        '푸릇푸릇 녹차밭에서, 덥지만 즐거운 초여름',
        '방방곡곡! 이번에는 부산 데이트'

    ];
    const textAlbum = [
        '신부 혜진이가 태어난 봄에, 우리의 추억이 묻어 있는 모교 한국항공대학교에서 첫 웨딩 사진을 촬영했습니다🩵',
        '신부 혜진이가 태어난 봄에, 우리의 추억이 묻어 있는 봄이지롱롱🩵',
        '장거리 연애가 시작되고 매주 광주-서울을 왔다갔다! 광주에서 첫 봄 나들이 피크닉을 했답니다🪴',
        '여름 철새를 보기 위해 보성 녹차밭으로 달려갔어요. 너무 더워서 제대로 보진 못했지만 행복했던 하루였어요☀️',
        '오빠네 동생 부부를 볼 겸 데이트 할 겸~ 여기저기 돌아다니며 추억을 쌓았어요🩵'
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
                img.src = '04_우리/사진첩/01/' + nameFile[i];
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
                img.src = '04_우리/사진첩/02/' + nameFile[i];
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
                img.src = '04_우리/사진첩/03/' + nameFile[i];
                img.alt = 'Wedding Photo' + i;

                slide.appendChild(img);
                slider.appendChild(slide);
            }
            break;
        
        case 'photo4':
            p1.textContent = subAlbum[3];
            subContainer.appendChild(p1);
            p2.textContent = textAlbum[3];
            textContainer.appendChild(p2);

            for (var i = 0; i < numFile[3]; i++) {
                const slide = document.createElement('div');
                slide.className = 'swiper-slide';

                const img = document.createElement('img');
                img.src = '04_우리/사진첩/04/' + nameFile[i];
                img.alt = 'Wedding Photo' + i;

                slide.appendChild(img);
                slider.appendChild(slide);
            }
            break;

        case 'photo5':
            p1.textContent = subAlbum[4];
            subContainer.appendChild(p1);
            p2.textContent = textAlbum[4];
            textContainer.appendChild(p2);

            for (var i = 0; i < numFile[4]; i++) {
                const slide = document.createElement('div');
                slide.className = 'swiper-slide';

                const img = document.createElement('img');
                img.src = '04_우리/사진첩/05/' + nameFile[i];
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
