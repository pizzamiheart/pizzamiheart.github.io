document.addEventListener('DOMContentLoaded', (event) => {
    var redDot = document.getElementById('redDot');
    var enterBtn = document.getElementById('enterBtn');
  
    // Show the Enter button when hovering over the red dot
    redDot.addEventListener('mouseover', function() {
      enterBtn.style.opacity = '1';
      enterBtn.style.transform = 'scale(1)';
      enterBtn.style.display = 'block';
      enterBtn.style.pointerEvents = 'all';
    });
  
    // Hide the Enter button when the mouse moves away from the button
    enterBtn.addEventListener('mouseleave', function() {
      enterBtn.style.opacity = '0';
      enterBtn.style.transform = 'scale(0)';
      enterBtn.style.display = 'none';
      redDot.style.display = 'block';
    });
  
    // Redirect to the main content page when the Enter button is clicked
    enterBtn.addEventListener('click', function() {
      window.location.href = 'main.html';
    });
  });
  