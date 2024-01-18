function showPhotoAlbum(photoId) {
    // 각 폴더 파일 개수
    const numFile = [8, 9, 8, 5, 6, 7, 8, 7];
    const nameFile = [
        '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg',
        '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg'
    ];
    const subAlbum = [
        '따스한 우리의 봄, 모교에서 추억하다',
        '풍요로운 가을, 행복한 미래를 꿈꾸다',
        '장거리 연애 시작, 우리의 첫 광주 봄나들이',
        '푸릇푸릇 녹차밭에서, 덥지만 즐거운 초여름',
        '방방곡곡! 이번에는 부산 데이트',
        '둘이서 떠난 첫 해외여행! 다낭에서 건지는 인생샷',
        '머나먼 땅 아프리카로, 우간다에서 전하는 사랑',
        '휴가는 처음이라... 떠나요~ 제주도~'

    ];
    const textAlbum = [
        '신부 혜진이가 태어난 봄에, 우리의 추억이 묻어 있는 모교 한국항공대학교에서 첫 웨딩 사진을 촬영했습니다🩵',
        '신랑 재준이가 태어난 가을에, 행복한 미래를 꿈꾸며 두번째 웨딩 사진을 촬영했습니다🩵',
        '장거리 연애가 시작되고 매주 광주-서울을 왔다갔다! 광주에서 첫 봄 나들이 피크닉을 했답니다🪴',
        '여름 철새를 보기 위해 보성 녹차밭으로 달려갔어요. 너무 더워서 제대로 보진 못했지만 행복했던 하루였어요☀️',
        '오빠네 동생 부부를 볼 겸 데이트 할 겸~ 여기저기 돌아다니며 추억을 쌓았어요🩵',
        '다낭으로 함께 떠나는 첫 해외여행을 다녀왔어요. 너무 좋은 날씨와 좋은 배경 덕분에 인생샷들을 건졌죠📸',
        '우간다로 해외 단기선교를 다녀왔어요. 경이로운 자연도 보고, 하나님의 사랑도 전하고 왔답니다🩵',
        '재준이 입사 후 처음 휴가를 써서 제주도를 다녀왔어요. 신나게 먹고 새도 보고 즐거운 시간을 즐겼답니다🎵'
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
        
        case 'photo6':
            p1.textContent = subAlbum[5];
            subContainer.appendChild(p1);
            p2.textContent = textAlbum[5];
            textContainer.appendChild(p2);

            for (var i = 0; i < numFile[5]; i++) {
                const slide = document.createElement('div');
                slide.className = 'swiper-slide';

                const img = document.createElement('img');
                img.src = '04_우리/사진첩/06/' + nameFile[i];
                img.alt = 'Wedding Photo' + i;

                slide.appendChild(img);
                slider.appendChild(slide);
            }
            break;
        
        case 'photo7':
            p1.textContent = subAlbum[6];
            subContainer.appendChild(p1);
            p2.textContent = textAlbum[6];
            textContainer.appendChild(p2);

            for (var i = 0; i < numFile[6]; i++) {
                const slide = document.createElement('div');
                slide.className = 'swiper-slide';

                const img = document.createElement('img');
                img.src = '04_우리/사진첩/07/' + nameFile[i];
                img.alt = 'Wedding Photo' + i;

                slide.appendChild(img);
                slider.appendChild(slide);
            }
            break;
        
        case 'photo8':
            p1.textContent = subAlbum[7];
            subContainer.appendChild(p1);
            p2.textContent = textAlbum[7];
            textContainer.appendChild(p2);

            for (var i = 0; i < numFile[7]; i++) {
                const slide = document.createElement('div');
                slide.className = 'swiper-slide';

                const img = document.createElement('img');
                img.src = '04_우리/사진첩/08/' + nameFile[i];
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
