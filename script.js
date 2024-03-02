// This function is called when the red dot is hovered over
function showEnterButton() {
    var enterBtn = document.getElementById('enterBtn');
    enterBtn.classList.remove('hidden'); // Remove the 'hidden' class to show the button
    enterBtn.style.transform = 'scale(1)'; // Scale the button to its normal size
}

// This function is called when the mouse stops hovering over the red dot
function hideEnterButton() {
    var enterBtn = document.getElementById('enterBtn');
    enterBtn.classList.add('hidden'); // Add the 'hidden' class to hide the button
    enterBtn.style.transform = 'scale(0)'; // Scale down the button to hide it
}

// Add the event listeners to the red dot
var redDot = document.getElementById('redDot');
redDot.addEventListener('mouseover', showEnterButton);
redDot.addEventListener('mouseout', hideEnterButton);

// Add the click event listener to the "Enter" button
var enterBtn = document.getElementById('enterBtn');
enterBtn.addEventListener('click', function() {
    window.location.href = 'main.html'; // Redirect to the main content page
});
