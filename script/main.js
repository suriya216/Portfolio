const modeToggle = document.getElementById('pressed');

let isDarkMode = false;

modeToggle.addEventListener('click', function() {
    isDarkMode = !isDarkMode;
    if (isDarkMode) {
        document.body.classList.add('dark_mode');
        modeToggle.src='assets/mode_light.png';
    } else {
        document.body.classList.remove('dark_mode');
        modeToggle.src='assets/mode_dark.png';
    }
    modeToggle.style.display = 'inline-block';
});
