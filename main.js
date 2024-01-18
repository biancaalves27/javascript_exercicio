$(document).ready(function () {
    $('form').on('submit', function (e) {        
        e.preventDefault();

        const novaTarefa = $('#nova-tarefa').val();
        const novoItem = $('<li style="display: none"></li>');

        $('<span>').text(novaTarefa).appendTo(novoItem);

        $(novoItem).appendTo('ul').fadeIn(1000);

        $('#nova-tarefa').val('');
    });

    
    $('ul').on('click', 'li', function() {
        $(this).toggleClass('clicked');
        
        // Utiliza slideDown ou slideUp com base na presença da classe "clicked"
        if ($(this).hasClass('clicked')) {
            $(this).slideDown();
        } else {
            $(this).slideUp();
        }
    });
});