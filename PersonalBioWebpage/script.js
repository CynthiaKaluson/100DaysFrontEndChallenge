const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Toggle icon image based on current mode
    const isDark = document.body.classList.contains('dark-mode');
    themeToggle.style.backgroundImage = isDark
        ? "url('https://cdn-icons-png.flaticon.com/512/6714/6714972.png')" // moon icon
        : "url('https://cdn-icons-png.flaticon.com/512/6714/6714978.png')"; // sun icon
});
