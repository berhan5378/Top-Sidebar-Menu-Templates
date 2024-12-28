const arrow=document.querySelector('.side-bar .bxs-chevron-right-circle'), 
      side_bar_bottom_span=document.querySelector('.side-bar .side-bar-bottom .Themes span');

arrow.addEventListener('click', () => { 
    arrow.classList.toggle('active_right_circle');
    document.querySelector('.side-bar').classList.toggle('active_side-bar');
    (side_bar_bottom_span.style.display=='none')?side_bar_bottom_span.style.display="flex":side_bar_bottom_span.style.display="none";
  });