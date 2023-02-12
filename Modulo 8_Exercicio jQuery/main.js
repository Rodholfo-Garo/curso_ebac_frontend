$(document).ready(function(){
    $('#Inserir').click(function(){
        $('#tarefas').slideDown();
    })
    $('#OcultarTarefa').click(function(){
        $('#tarefas').slideUp();
    })


    $('form').on('submit', function(e){
        e.preventDefault();
    
        const novaTarefa=$('#novaTarefa').val();
        const inserirNovaTarefa=$('<li style="display:none"> </li>')

        $(`<li> ${novaTarefa}</li>`).appendTo(inserirNovaTarefa);        
      
    
        $(inserirNovaTarefa).appendTo('ul');
        $(inserirNovaTarefa).fadeIn(1000);
        $('#novaTarefa').val('');
    
        $(inserirNovaTarefa).click(function(){
            $(inserirNovaTarefa).toggleClass('feito')
        })
    
    
    })

})

