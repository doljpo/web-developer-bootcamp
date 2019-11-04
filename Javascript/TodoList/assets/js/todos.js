$(".fa-plus").on("click", function() { 
    $("input[type=text]").fadeToggle();
    $("input[type=text]").focus();
});

$("input[type=text]").on('keypress', function(key) {
        if (key.which == 13) {
            var newTodo = $(this).val();
            $("ul").append("<li><span><i class='fa fa-trash-alt'></i></span> " + newTodo + "</li>");
            $(this).val("");
        }
});

$("ul").on("click", "li", function() {    
    $(this).toggleClass('complete');
});

$("ul").on("click", "li span", function(event) {    
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });

    event.stopPropagation();
});