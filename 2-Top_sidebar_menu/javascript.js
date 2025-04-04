const arrow=document.querySelector('.side-bar .ri-arrow-right-circle-fill'),
      side_bar=document.querySelector('.side-bar'),
      themes_btn = document.querySelector('.Themes');

      arrow.addEventListener('click', () => {
        side_bar.classList.toggle('active_side-bar');
      });
      themes_btn.addEventListener('click', () => 
        document.querySelector('body').classList.toggle('themes')
      ); 