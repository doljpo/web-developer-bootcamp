$("ul").on("click", "li", function() {    
    $(this).toggleClass('complete');
});

$("ul").on("click", "li span", function(event) {    
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });

    event.stopPropagation();
});

$("input[type=text]").on('keypress', function(key) {
        if (key.which == 13) {
            var newTodo = $(this).val();
            $(this).val("");
            $("ul").append("<li><span>X</span> " + newTodo + "</li>");
        }
});