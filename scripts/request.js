document.getElementById("request-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const data = Object.fromEntries(new FormData(e.target));

  console.log("Content Request:", data);

  alert("요청이 전송되었습니다!\n(현재는 저장만 됩니다)");

  e.target.reset();
});
