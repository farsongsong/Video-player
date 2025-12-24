function showVideo(type, btn) {
  const video = document.getElementById("videoPlayer");
  const buttons = document.querySelectorAll("button");

  // 버튼 활성화 표시
  buttons.forEach(b => b.classList.remove("active"));
  btn.classList.add("active");

  // 영상 변경
  if (type === "path") {
    video.src = "videos/path.mp4";
  } else if (type === "sensor") {
    video.src = "videos/sensor.mp4";
  } else if (type === "drive") {
    video.src = "videos/drive.mp4";
  }

  video.load();
  video.play();
}
