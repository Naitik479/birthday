function go(page) {
  document.body.style.opacity = 0;
  setTimeout(() => {
    window.location.href = page;
  }, 300);
}
function playMusic() {
  let music = document.getElementById("music");
  music.src = "romantic.mp3";
  music.play();
}

function funnyMusic() {
  let music = document.getElementById("music");
  music.src = "funny.mp3";
  music.play();
}

function stopMusic() {
  document.getElementById("music").pause();
}
