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


//Expand All Project Detail

$('#expand').click(function(e) {
    var expandText = $(this).next()[0];
    console.log(expandText.text);
    $(this).toggleClass("ion-android-expand ion-android-contract");

    //if ($('.project').hasClass('expanded')) {
    //    $('.project').toggleClass('expanded');
    //} else {
    //    $('.project').addClass('expanded');
    //}

    $('.project').toggleClass('expanded');

});

//Expand Single Project Detail

$('.project').click(function() {
    this.classList.add('expanded');
});

//Close Project Detail

$('.ion-ios-close-empty').click(function(e) {
    $(this).parent().removeClass('expanded');
    e.stopPropagation();
});


// Add a date to the footer of the page.

var dateEl = document.getElementById('date');
var dateText = document.createElement('p');
dateText.appendChild(document.createTextNode(new Date().getFullYear()));
dateEl.appendChild(dateText);
