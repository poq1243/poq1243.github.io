function showContact() {
    document.getElementById('ContactOverlay').style.display = 'block';
}

function closeContact() {
    document.getElementById('ContactOverlay').style.display = 'none';
}

function collapse(element) {
    var before = document.getElementsByClassName("active")[0]               // 기존에 활성화된 버튼
    if (before && document.getElementsByClassName("active")[0] != element) {  // 자신 이외에 이미 활성화된 버튼이 있으면
        before.nextElementSibling.style.maxHeight = null;   // 기존에 펼쳐진 내용 접고
        before.classList.remove("active");                  // 버튼 비활성화
    }
    element.classList.toggle("active");         // 활성화 여부 toggle

    var content = element.nextElementSibling;
    if (content.style.maxHeight != 0) {         // 버튼 다음 요소가 펼쳐져 있으면
        content.style.maxHeight = null;         // 접기
    } else {
        content.style.maxHeight = content.scrollHeight + "px";  // 접혀있는 경우 펼치기
    }
}

// 팝업 토글 함수
function toggleGuestbook() {
    const guestbook = document.getElementById('guestbookPopup');
    guestbook.style.display = guestbook.style.display === 'none' ? 'flex' : 'none';
}

// 방명록 양식 제출 이벤트 핸들러
document.getElementById('guestbookForm').onsubmit = function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    // Fetch API를 사용하여 서버에 데이터 전송
    fetch('/submit-guestbook', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, message }),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            toggleGuestbook();
            loadGuestbookEntries(); // 방명록 엔트리를 다시 불러옵니다.
        })
        .catch((error) => {
            console.error('Error:', error);
        });
};

function loadGuestbookEntries() {
    fetch('/get-guestbook-entries')
        .then(response => response.json())
        .then(entries => {
            const entriesContainer = document.getElementById('entriesContainer');
            entriesContainer.innerHTML = ''; // 컨테이너 초기화
            entries.forEach(entry => {
                const div = document.createElement('div');
                div.innerHTML = `<strong>${entry.name}</strong>: ${entry.message}`;
                entriesContainer.appendChild(div);
            });
        });
}

// 페이지 로드 시 방명록 엔트리를 불러옵니다.
window.addEventListener('load', loadGuestbookEntries);
