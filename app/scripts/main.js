//Accordion for projects 

$(document).ready(function() {
    $("#work h3").click(function() {
        $("#work ul").slideUp();

        if (!$(this).next().is(":visible")) {
            $('.btn').show();
            $(this).next().slideDown();
        }
    });
    //when .btn is clicked slide up all other btns
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


//Expand Project Detail


var projectThumbs = $('.project').click(function(e){

    //$(e.target).css('background-image', 'none');
    //$(e.target).css('background-color', '#252525');


 

    

    var targetClasses = e.target.classList;
    targetClasses.add('expanded');

    


});




//Trigger Workflow Tools Animations on scroll

//$(window).scroll(function() {
//    console.log($(this).scrollTop());
//    if ($(this).scrollTop() > 1760) {
//        $('.even').velocity("transition.slideLeftBigIn", { stagger: 250 });
//    }
//});



// Add a date to the footer of the page.

var dateEl = document.getElementById('date');
var dateText = document.createElement('p');
dateText.appendChild(document.createTextNode(new Date().getFullYear()));
dateEl.appendChild(dateText);
