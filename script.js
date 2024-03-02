document.getElementById('redDot').addEventListener('mouseover', function() {
    document.getElementById('enterBtn').style.transform = 'scale(1)';
    document.getElementById('enterBtn').style.zIndex = 1;
});

document.getElementById('enterBtn').addEventListener('click', function() {
    window.location.href = 'main.html'; // Make sure this matches the name of your main content page
});
