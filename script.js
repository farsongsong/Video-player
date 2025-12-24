function showVideo(type) {
  const video = document.getElementById("videoPlayer");

  if (type === "path") {
    video.src = "videos/path.mp4"; // 자율 경로 설정 영상
  } else if (type === "sensor") {
    video.src = "videos/sensor.mp4"; // 초음파 + 색인식 영상
  } else if (type === "drive") {
    video.src = "videos/drive.mp4"; // 주행 영상
  }

  video.load();
  video.play();
}
