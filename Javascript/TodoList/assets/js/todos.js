$("ul").on("click", "li", function() {    
    $(this).toggleClass('complete');
});

$("ul").on("click", "li span", function() {    
    $(this).parent().fadeOut(1000, function() {
        $(this).remove();
    });
});

$("input[type=text]").on('keypress', function(key) {
        if (key.which == 13) {
            var newTodo = $(this).val();
            $(this).val("");
            $("ul").append("<li><span>X</span> " + newTodo + "</li>");
        }
});