document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("open-terminal-btn");
  const terminalWrapper = document.querySelector(".terminal-wrapper");

  if (!openBtn || !terminalWrapper) return;

  openBtn.addEventListener("click", () => {
    terminalWrapper.classList.add("active");
    openBtn.style.display = "none";

    // 터미널 입력 포커스
    const input = document.getElementById("terminal-input");
    if (input) input.focus();
  });
});
