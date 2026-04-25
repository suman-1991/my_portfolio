function reveal() {
    $(".fade-in").each(function() {
        if($(this).offset().top < $(window).scrollTop() + window.innerHeight - 50) {
            $(this).addClass("visible");
        }
    });
}

$(document).ready(function(){
    reveal();
});

$(window).on("scroll", function() {
    reveal();

    let scroll = $(window).scrollTop();
    if(scroll > 100) {
        $("#hero").addClass("shrink");
        $("#stickyHeader").fadeIn();
    } else {
        $("#hero").removeClass("shrink");
        $("#stickyHeader").fadeOut();
    }
});
