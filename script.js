document.addEventListener('DOMContentLoaded', (event) => {
    var redDot = document.getElementById('redDot');
    var enterBtn = document.getElementById('enterBtn');
  
    // When the red dot is hovered over, show the Enter button
    redDot.addEventListener('mouseover', function() {
      enterBtn.style.opacity = '1';
      enterBtn.style.transform = 'scale(1)';
      enterBtn.style.display = 'block';
    });
  
    // When the red dot is no longer hovered over, hide the Enter button
    redDot.addEventListener('mouseout', function() {
      enterBtn.style.opacity = '0';
      enterBtn.style.transform = 'scale(0)';
      enterBtn.style.display = 'none';
    });
  
    // When the Enter button is clicked, redirect to the main content page
    enterBtn.addEventListener('click', function() {
      window.location.href = 'main.html';
    });
  });
  