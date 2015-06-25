//Accordion for projects 

$(document).ready(function() {
    //$(".ion-android-funnel").click(function(e) {
    //
    //    console.log('click');
    //
    //    $("#work ul").slideUp();
    //
    //    if (!$(this).next().is(":visible")) {
    //        $('.btn').show();
    //        $(this).next().slideDown();
    //    }
    //});
    //when .btn is clicked slide up all other btns
    //$(".btn").click(function() {
    //    $(this).siblings().slideUp();
    //});
});


$(document).ready(function() {
    $(".ion-android-funnel").click(function(e) {

        if ($(window).width() >= 768) {
            $('.filter-list').toggleClass('show-filters');
        }
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

    var statusText = $(this).next()[0];

    if ($(this).hasClass('ion-android-expand')) {
        $('.project').addClass('expanded');
        $(statusText).text('Collapse Projects');
    } else {
        $('.project').removeClass('expanded');
        $(statusText).text('Expand Projects');
    }

    $(this).toggleClass("ion-android-expand ion-android-contract");
});

//Expand Single Project Detail

$('.project').click(function(e) {
    e.preventDefault();
    this.classList.add('expanded');
    $('html, body').animate({
        scrollTop: $("#" + this.id).offset().top - 130
    }, 500);
});

//Close Project Detail

$('.ion-ios-close-empty').click(function(e) {
    e.preventDefault();
    var article = $(this).parent().parent()[0];
    $(article).removeClass('expanded');
    e.stopPropagation();
});


// Add a date to the footer of the page.

var dateEl = document.getElementById('date');
var dateText = document.createElement('p');
dateText.appendChild(document.createTextNode(new Date().getFullYear()));
dateEl.appendChild(dateText);
