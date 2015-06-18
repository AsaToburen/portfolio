//Accordion for projects 

$(document).ready(function() {
    $("#work h3").click(function() {
        $("#work ul").slideUp();
        //$('.btn').show(function() {
        //       $(this).next().slideDown();
        //   });
        //slide down the link list below the h3 clicked - only if its closed
        if (!$(this).next().is(":visible")) {
            $('.btn').show();
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


//Trigger Workflow Tools Animations on scroll

//$(window).scroll(function() {
//    console.log($(this).scrollTop());
//    if ($(this).scrollTop() > 1760) {
//        $('.even').velocity("transition.slideLeftBigIn", { stagger: 250 });
//    }
//});