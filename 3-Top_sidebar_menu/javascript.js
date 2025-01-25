const arrow=document.querySelector('.side-bar .ri-arrow-left-circle-fill'),
      side_bar=document.querySelector('.side-bar'),
      checkbox = document.querySelector('input[type="checkbox"]');

      arrow.addEventListener('click', () => {
        side_bar.classList.toggle('active_side-bar'); 
        updateSideBarLinks();
      });
      checkbox.addEventListener('change', () => 
        document.querySelector('body').classList.toggle('themes')
      ); 

      // Function to dynamically handle sidebar links
function updateSideBarLinks() {
  document.querySelectorAll('.side-bar-link').forEach(element => {
    
    if (side_bar.classList.contains('active_side-bar')) {
      // Add mouse events when sidebar is active
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave); 
    } else {
      // Remove mouse events when sidebar is not active
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    }
  });
}

// Mouse event handlers
function handleMouseEnter(event) {
  const popupId = this.getAttribute('data-popup'); // Get the associated popup ID
  const popup = document.getElementById(popupId);

  // Show the pop-up and position it near the cursor
  popup.style.cssText="opacity:1;transition: opacity 1s ease-in-out ,background 1s ease-in-out;z-index:100;"
  popup.style.top = event.pageY - 25 + 'px'; // Slight offset for visibility
  popup.style.left = event.pageX + 30 + 'px';
}

function handleMouseLeave() {
  const popupId = this.getAttribute('data-popup'); // Get the associated popup ID
  const popup = document.getElementById(popupId);

  // Hide the pop-up when the mouse leaves the icon
  popup.style.cssText="opacity:0;transition: none;z-index:-1;"
}
// Initial setup for the sidebar links
updateSideBarLinks();