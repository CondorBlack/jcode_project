var darkModeButton = document.getElementById('darkModeButton');
var body = document.body;

darkModeButton.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
});
