const arrow=document.querySelector('.side-bar .ri-arrow-right-circle-fill'),
      checkbox = document.querySelector('input[type="checkbox"]');

      arrow.addEventListener('click', () => {
        document.querySelector('.side-bar').classList.toggle('active_side-bar'); 
      });
      checkbox.addEventListener('change', () => 
        document.querySelector('body').classList.toggle('themes')
      );
      document.querySelectorAll('.side-bar-link').forEach(element => {
          element.addEventListener('click', () => {
          element.classList.toggle('dropdown');
        });
      });