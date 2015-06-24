//Accordion for projects 

$(document).ready(function() {
    $(".ion-android-funnel").click(function(e) {

        console.log('click');

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

    console.log('clicked');
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
