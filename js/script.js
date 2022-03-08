$('.button-question').click(function (e) { 
    e.preventDefault();
    
    $('.button-question i').css('transform', 'rotate(0)');
    const answer = $(this).next();
    
    if(answer.hasClass('closed')){
        $('.answer').addClass('closed');
        $('.answer').removeClass('open');
        
        answer.addClass('open');
        answer.removeClass('closed');
        
        $(this).find('i').css('transform', 'rotate(45deg)');
        
        
    }
    else if(answer.hasClass('open')){
        answer.removeClass('open');
        answer.addClass('closed');
        
    }

})