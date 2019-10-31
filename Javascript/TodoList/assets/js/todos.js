$("li").on("click", function() {    
    $(this).toggleClass('complete');
});

$("li span").on("click", function() {    
    $(this).parent().fadeOut(1000, function() {
        $(this).remove();
    });
});