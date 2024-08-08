document.addEventListener('DOMContentLoaded', function () {
    // Obtém o caminho da URL atual
    var currentPath = window.location.pathname;
    var normalizedPath = currentPath.replace(/^\//, '');
    
    // Obtém todos os links do menu
    var menuItems = document.querySelectorAll('.menus a');

    // Itera sobre os links do menu
    menuItems.forEach(function (menuItem) {
        // Cria um link temporário para comparar apenas o pathname
        var tempLink = document.createElement('a');
        tempLink.href = menuItem.href;
        // Normaliza o caminho do link removendo "/"
        var linkPath = tempLink.pathname.replace(/^\//, '');
        // Se o pathname do link coincide com o pathname atual, adiciona a classe 'active'
        if (linkPath === normalizedPath) {
            menuItem.classList.add('active');
        }
    });
});
