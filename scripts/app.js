const video = document.getElementById("hero-video");

video.addEventListener("canplay", () => {
  setTimeout(() => {
    video.play();
  }, 3000);
});
