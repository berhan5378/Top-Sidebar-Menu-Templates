const arrow=document.querySelector('.side-bar .bxs-chevron-right-circle');
 
arrow.addEventListener('click', () => { 
    arrow.classList.toggle('active_right_circle');
    document.querySelector('.side-bar').classList.toggle('active_side-bar');
    document.querySelector('.side-bar .profile .username').classList.toggle('active_side-bar_style');
    document.querySelector('.side-bar-search .svg_icon').style.left='20px';

    document.querySelector('.side-bar-search .input').style.width='0';
    document.querySelectorAll('.side-bar .side-bar-link').forEach(side_bar_link => {
        side_bar_link.classList.toggle('active_side-bar-li');
    });
    document.querySelector('.side-bar .side-bar-bottom .Themes span').style.display='none';
    document.querySelector('.side-bar .side-bar-bottom .logout').classList.toggle('active_side-bar-li');
    document.querySelectorAll('.side-bar .side-bar-link p').forEach(side_bar_link_p => {
        side_bar_link_p.classList.toggle('active_side-bar_style');
    });
    document.querySelector('.side-bar .side-bar-bottom .logout p').classList.toggle('active_side-bar_style');
  });
 
 
  
 
 
 
 