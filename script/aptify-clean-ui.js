/*on page like 'Open the record in new window' where there is no menu, this code adjusts the left pane to be be resized for full width*/
function initWidthAdjustment() {
  const menu = document.querySelector('.a-shell-slide-out');
  const main = document.querySelector('.a-shell-main');

  if (!menu || !main) {
    // Retry after a short delay
    setTimeout(initWidthAdjustment, 500);
    return;
  }

  function updateWidth() {
    const menuWidth = menu.offsetWidth;
    main.style.setProperty('width', `calc(100% - ${menuWidth}px)`, 'important');
  }

  window.addEventListener('resize', updateWidth);
  updateWidth();
}

initWidthAdjustment();
