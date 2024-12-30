const arrow=document.querySelector('.side-bar .ri-arrow-right-circle-fill');

arrow.addEventListener('click', () => { 
    arrow.classList.toggle('active_right_circle');
    document.querySelector('.side-bar').classList.toggle('active_side-bar');
    document.querySelector('.side-bar .side-bar-bottom .Themes span').classList.toggle('translateXMinus200');
  });