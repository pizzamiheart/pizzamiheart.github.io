document.addEventListener('DOMContentLoaded', (event) => {
    var redDot = document.getElementById('redDot');
    var enterBtn = document.getElementById('enterBtn');
  
    // When the red dot is hovered over, show the Enter button
    redDot.addEventListener('mouseover', function() {
      enterBtn.style.opacity = '1';
      enterBtn.style.transform = 'translate(-50%, -50%) scale(1)';
      enterBtn.style.display = 'block';
      redDot.style.display = 'none'; // Hide the red dot
    });
  
    // When the Enter button is clicked, redirect to the main content page
    enterBtn.addEventListener('click', function() {
      window.location.href = 'main.html';
    });
  });
  