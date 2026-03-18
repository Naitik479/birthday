function go(page) {
  document.body.style.opacity = 0;
  setTimeout(() => {
    window.location.href = page;
  }, 300);
}