var projectContainer = document.getElementById('projects');
var projects = projectContainer.getElementsByTagName('div');

var input = 'css';

var filteredProjects = _.filter(projects, function(project) {
    console.log(project.className);
    return _.includes(project.tags, input);
});

console.log(filteredProjects);
