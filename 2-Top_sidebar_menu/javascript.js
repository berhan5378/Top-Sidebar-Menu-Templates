const arrow=document.querySelector('.side-bar .bxs-chevron-right-circle');

arrow.addEventListener('click', () => { 
    arrow.classList.toggle('active_right_circle');
    document.querySelector('.side-bar').classList.toggle('active_side-bar');
    document.querySelector('.side-bar .side-bar-bottom .Themes span').classList.toggle('translateXMinus200');
  });