$(function() {
    // 1. Corregimos las variables con tus clases reales de CSS (un guion bajo)
    var enlaces = $('.menu__enlaces'),
        btnMenu = $('.menu__btn-menu'),
        icono   = $('.menu__btn-menu i'); // Busca la etiqueta del icono dentro del botón

    // 2. Evento Click para que la hamburguesa funcione
    btnMenu.on('click', function(e) {
        enlaces.slideToggle();
        icono.toggleClass('fa-bars');
        icono.toggleClass('fa-times');
    });

    // 3. Código para que no se rompa al estirar la pantalla
    $(window).on('resize', function() {
        if ($(this).width() > 1023) {
            enlaces.show();
            icono.addClass('fa-times').removeClass('fa-bars');
        } else {
            enlaces.hide();
            icono.addClass('fa-bars').removeClass('fa-times');
        }
    });
});
