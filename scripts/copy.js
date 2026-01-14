function copyText(text) {
    const input = document.createElement('input');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    popup('Copied to clipboard!');
}

// 요소 가져오기
const modal = document.getElementById("myModal");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.querySelector(".close");

// 팝업 열기
openBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

// 닫기 버튼 클릭 시 닫기
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// 배경 클릭 시 닫기
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});