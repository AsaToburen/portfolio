var projectContainer = document.getElementById('projects');
var projects = projectContainer.getElementsByTagName('div');


var filterBtns = $('.btn').click(function() {
    var $el = $('.' + this.id).fadeIn(450);
    $('#projects > article').not($el).hide();
    filterBtns.removeClass('active');
    console.log(this);
    $(this).addClass('active');
});


//$('#mail').click(function() {
//    $(this).addClass('hideTop');
//    $('.linkedin, .twitter').addClass('hideBottom');
//    $('.contact-form').addClass('showContact');
//});


$("#mail").click(function() {
    $('#mail, .linkedin, .twitter').animate({
        top: "-28em",
    }, 500, function() {
       $('.contact-form').animate({
        display: "block",
        right: "0em",
       });
    });
});
