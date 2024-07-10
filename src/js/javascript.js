   $(document).ready(function() {
    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }

    // Obtener el parámetro de categoría de la URL //
    var initialCategory = getUrlParameter('category') || 'all';

    // Agregar clase al enlace correspondiente
    $('.category-list .category-item[data-category="' + initialCategory + '"]').addClass("ct_item-active");

    // Mostrar productos de la categoría correspondiente //
    if (initialCategory === 'all') {
        $('.product-item').show();
    } else {
        $('.product-item').hide();
        $('.product-item[data-category="' + initialCategory + '"]').show();
    }

    // Evento de clic para cambiar de categoría //
    $('.category-item').click(function() {
        var catProduct = $(this).data('category');
        console.log(catProduct);

        // Agregar clase al seleccionado //
        $('.category-item').removeClass("ct_item-active");
        $(this).addClass("ct_item-active");

        // Ocultar productos //
        $('.product-item').hide();

        // Mostrar productos de la categoría seleccionada//
        if (catProduct === 'all') {
            $('.product-item').show();
        } else {
            $('.product-item[data-category="' + catProduct + '"]').show();
        }
    });

    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');

    menuToggle.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });

    // Validaciones del formulario//
    var formulario = document.getElementsByName('formulario')[0];
    var boton = document.getElementById('btn');

    var validarRadio = function (e) {
        if (formulario.trato[0].checked == true ||
            formulario.trato[1].checked == true ||
            formulario.trato[2].checked == true) {
        } else {
            alert("Completa el campo Pronombre");
            e.preventDefault();
        }
    };

    var validarNombre = function (e) {
        if (formulario.nombre.value == 0) {
            alert("Completa el campo Nombre");
            e.preventDefault();
        }
    }

    var validarMail = function (e) {
        if (formulario.email.value == 0) {
            alert("Completa el campo Email");
            e.preventDefault();
        }
    }

    var validarSelect = function (e) {
        if (formulario.genero.selectedIndex === 0) {
            alert("Seleccione género literario preferido");
            e.preventDefault();
        }
    };

    var validarTitulo = function (e) {
        if (formulario.titulo.value == 0) {
            alert("Completa el campo Título a publicar");
            e.preventDefault();
        }
    }

    var validar = function (e) {
        validarRadio(e);
        validarNombre(e);
        validarMail(e);
        validarSelect(e);
        validarTitulo(e);
    };

    formulario.addEventListener("submit", validar);

});


 
