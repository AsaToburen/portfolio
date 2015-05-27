
/* Add build task -- cssnano etc, browserify */

var gulp = require('gulp'),
    connect = require('gulp-connect'),
    open = require('gulp-open'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer-core'),
    imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    port = process.env.port || 8080;

gulp.task('open', function() {
    var options = {
        url: 'http://localhost:' + port,
        app: 'google chrome'
    };
    gulp.src('./app/index.html')
        .pipe(open('', options));
});

gulp.task('connect', function() {
    connect.server({
        root: 'app',
        port: port,
        livereload: true
    });
});

gulp.task('images', function() {
    gulp.src('./app/images/**/*')
        .pipe(cache(imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest('./app/dist/images'));
});

gulp.task('styles', function() {
    return gulp.src('./app/styles/*.css')
        .pipe(postcss([
            require('postcss-nested'),
            require('postcss-simple-vars'),
            require('autoprefixer-core')('last 3 versions'),
            require('cssnext')
        ]))
        .pipe(gulp.dest('./app/dist/css'))
        .pipe(connect.reload());
});

gulp.task('scripts', function(){
  //return gulp.src(['./app/scripts/jquery.min.js'], ['./app/scripts/main.js'])
  return gulp.src('./app/scripts/*.js')
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(concat('app.js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('./app/dist/scripts/'))
    .pipe(connect.reload());
});

gulp.task('html', function() {
    gulp.src('./app/index.html')
        .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch('app/styles/*.css', ['styles'])
    gulp.watch("app/styles/images/*", ['images']);
    gulp.watch("app/*.html");
});

gulp.task('default', ['scripts']);

gulp.task('serve', ['watch', 'styles', 'scripts', 'connect', 'open']);


