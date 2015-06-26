var gulp = require('gulp'),
    connect = require('gulp-connect'),
    open = require('gulp-open'),
    sass = require('gulp-sass'),
    jshint = require('gulp-jshint'),
    autoprefixer = require('autoprefixer-core'),
    imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache'),
    plumber = require('gulp-plumber'),
    minifyHTML = require('gulp-minify-html'),
    minifyCss = require('gulp-minify-css'),
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


gulp.task('sass', function() {
    return gulp.src('./app/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./app/styles'))
        .pipe(connect.reload());
});

gulp.task('styles', function() {
  gulp.src('./app/styles/styles.css')
    .pipe(minifyCss())
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./app/dist/css'));
});

gulp.task('jshint', function() {
  return gulp.src('app/scripts/main.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});


gulp.task('scripts', function() {
    return gulp.src('./app/scripts/*.js')
        .pipe(plumber({
            errorHandler: function(error) {
                console.log(error.message);
                this.emit('end');
            }
        }))
        .pipe(concat('app.js'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(uglify())
        .pipe(gulp.dest('./app/dist/scripts/'))
        .pipe(connect.reload());
});


gulp.task('copystyles', function(){
  gulp.src(['dist/css/main.css'])
    .pipe(rename({
      basename: "site"
    }))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('critical', ['build', 'copystyles'], function () {
  critical.generateInline({
    base: 'dist/',
    src: 'index.html',
    styleTarget: 'css/styles.css',
    htmlTarget: 'index.html',
    width: 320,
    height: 480,
    minify: true
  });
});


gulp.task('html', function() {
    gulp.src('./app/index.html')
        .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch("app/images/*", ['images']);
    gulp.watch("app/*.html");
});

gulp.task('default', ['scripts']);
gulp.task('serve', ['watch', 'sass', 'scripts', 'connect', 'open']);
gulp.task('build', ['jshint', 'sass', 'scripts', 'styles', 'images']);




