// 최초 접속시
document.addEventListener("DOMContentLoaded", function () {
  var contents = document.querySelectorAll(".menu");
  contents.forEach(function (content) {
    content.style.display = "none";
  });
  // 메인 콘텐츠만 표시
  var mainContent = document.getElementById("content1");
  mainContent.style.display = "block";
  // 클릭한 버튼과 일치하는 제목의 ID를 찾기
  var buttons = document.querySelectorAll(".rightsidebar button");
  buttons.forEach(function (button, index) {
    button.addEventListener("click", function () {
      // 해당 버튼의 인덱스에 해당하는 컨텐츠 ID 찾기
      var contentId = "content" + (index + 1);
      // 해당 컨텐츠 표시
      showContent(contentId);
    });
  });
});

// 클릭한 버튼을 활성화하는 함수
document.addEventListener("DOMContentLoaded", function () {
  // 모든 버튼을 선택
  var buttons = document.querySelectorAll(".rightsidebar button");
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      // 현재 활성화된 버튼에 activebutton 클래스 추가
      activateButton(button);
    });
  });

  // 현재 활성화된 버튼에 activebutton 클래스 추가하는 함수
  function activateButton(activeButton) {
    // 모든 버튼에 activebutton 클래스 제거
    buttons.forEach(function (button) {
      button.classList.remove("activebutton");
    });
    // 현재 활성화된 버튼에 activebutton 클래스 추가
    activeButton.classList.add("activebutton");
  }
});
// 컨텐츠를 표시하는 함수
function showContent(contentId) {
  // 모든 컨텐츠 숨기기
  var contents = document.querySelectorAll(".menu");
  contents.forEach(function (content) {
    content.style.display = "none";
  });
  // 클릭된 버튼에 해당하는 컨텐츠만 보이도록 설정
  var contentElement = document.getElementById(contentId);
  if (contentElement) {
    contentElement.style.display = "block";
  } else {
    console.error("Content element with ID " + contentId + " not found");
  }
}
