var projectContainer = document.getElementById('projects');
var projects = projectContainer.getElementsByTagName('div');


var filterBtns = $('.btn').click(function() {
    var $el = $('.' + this.id).fadeIn(450);
    $('#projects > article').not($el).hide();
    filterBtns.removeClass('active');
    console.log(this);
    $(this).addClass('active');
});



//var input = 'css';

//var filteredProjects = _.filter(projects, function(project) {
//    console.log(project.className);
//    return _.includes(project.tags, input);
//});

//console.log(filteredProjects);
