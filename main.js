$(document).ready(function(){


    $('form').on('submit', function(e){
        e.preventDefault();
        const nomeDaTarefa = $('#nome-tarefa').val();
        const novaTarefa = $('<li></li>');
        $(`<li>${nomeDaTarefa}</li>`).appendTo(novaTarefa)
        $(novaTarefa).appendTo('ul');
        $('li').click(function(){
            $(this).addClass('traço')
        });
        $('#nome-tarefa').val('')
    });
});