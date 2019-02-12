// check of specific todos by clicking
$("ul").on("click", "li", function() {
    //if li is grey
    $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text'").keypress(function(event) {
    if(event.which === 13) {
        // grabbing new todo text from input
        let toDoText = $(this).val();

        // create a new li and add to ul
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + toDoText + "</li>");

        // getting an empty input after to do is added
        $(this).val("");
    }
});

$(".fa-plus").click(function(){
    $("input[type=text]").fadeToggle();
});