//Accordion for projects 

$(document).ready(function() {

    $("#work h3").click(function() {
        $("#work ul").slideUp();
        //slide down the link list below the h3 clicked - only if its closed
        if (!$(this).next().is(":visible")) {
            $(this).next().slideDown();
        }
    });
    //when .btn is clicked slide up all other 
    //btns
    $(".btn").click(function() {
        $(this).siblings().slideUp();
    });
});



// Filter to sort projects

var filterBtns = $('.btn').click(function() {
    var $el = $('.' + this.id).fadeIn(450);
    $('#projects > article').not($el).hide();
    filterBtns.removeClass('active');
    $(this).addClass('active');
});
