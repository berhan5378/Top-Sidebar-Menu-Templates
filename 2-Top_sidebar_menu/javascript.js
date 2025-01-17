const arrow=document.querySelector('.side-bar .ri-arrow-right-circle-fill'),
      side_bar=document.querySelector('.side-bar'),
      side_bar_link=document.querySelectorAll('.side-bar .side-bar-link'),
      exception=document.querySelector("#exception"),
      input=document.querySelector('.side-bar-search .input'),
      Themes=document.querySelector('.side-bar .side-bar-bottom .Themes'),
      logout=document.querySelector('.side-bar-bottom .logout');
      let background="#eaeded";
arrow.addEventListener('click', () => { 
    arrow.classList.toggle('active_right_circle');
    side_bar.classList.toggle('active_side-bar');
    document.querySelector('.side-bar .side-bar-bottom .Themes span').classList.toggle('translateXMinus200');
  });

  //Themes
  Themes.addEventListener('click', () => {
     side_bar.classList.toggle('Themes_active');
     document.querySelector('.side-bar .profile .username p').classList.toggle('p_active');
     input.classList.toggle('active'); 
     document.querySelector('.side-bar-search .svg_icon').classList.toggle('color'); 
     document.querySelector('.side-bar .side-bar-bottom .Themes-Checkbox p').classList.toggle('Themes_active');
     document.querySelector('.side-bar .side-bar-bottom .Themes-Checkbox').classList.toggle('color4');
     side_bar_link.forEach(side_bar_link => {
      side_bar_link.classList.toggle('color2');
     });
     (background==="#eaeded")?background="#17202a" : background="#eaeded";
     Themes.style.background=background;
     logout.classList.toggle('color2');
  });

  side_bar_link.forEach(side_bar_link => {
    background_color(side_bar_link);
   });

   background_color(Themes);
   background_color(logout);
   
   function background_color(link) {
    link.addEventListener('mouseover', () => {
      if (link !== exception) {
        link.style.background=background;
      }
     }); 
     link.addEventListener('mouseleave', () => {
      if (link !== exception) {
        link.style.background="transparent"; 
      }  
     });
   }