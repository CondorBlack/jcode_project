var darkModeButton = document.getElementById('darkModeButton');
var body = document.body;

darkModeButton.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
});


var menuItems = document.querySelectorAll('#menu li a');

menuItems.forEach(function(item) {
    item.addEventListener('click', function() {
        // Supprimer la classe active de tous les éléments du menu
        menuItems.forEach(function(item) {
            item.classList.remove('active');
        });

        // Ajouter la classe active à l'élément de menu sélectionné
        this.classList.add('active');
    });
});
