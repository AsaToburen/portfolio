//Accordion for projects 

$(document).ready(function() {
    $("#work h3").click(function() {
        //slide up all the link lists
        $("#work ul").slideUp();
        //slide down the link list below the h3 clicked - only if its closed
        if (!$(this).next().is(":visible")) {
            $(this).next().slideDown();
        }
    });
});



// Filter to sort projects

var filterBtns = $('.btn').click(function() {
    var $el = $('.' + this.id).fadeIn(450);
    $('#projects > article').not($el).hide();
    filterBtns.removeClass('active');
    console.log(this);
    $(this).addClass('active');
});
