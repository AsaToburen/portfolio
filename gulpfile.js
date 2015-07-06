var gulp = require('gulp'),
    connect = require('gulp-connect'),
    open = require('gulp-open'),
    sass = require('gulp-sass'),
    jshint = require('gulp-jshint'),
    autoprefixer = require('autoprefixer-core'),
    imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache'),
    plumber = require('gulp-plumber'),
    critical = require('critical'),
    gzip = require('gulp-gzip'),
    minifyHTML = require('gulp-minify-html'),
    rename = require('gulp-rename'),
    imageminOptipng = require('imagemin-optipng'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    del = require('del'),
    csso = require('gulp-csso'),
    uncss = require('gulp-uncss'),
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

gulp.task('minifyHTML', function() {
    var opts = {
        conditionals: true,
        spare: true
    };
    return gulp.src('./app/*.html')
        .pipe(minifyHTML(opts))
        .pipe(gulp.dest('./app/dist/'));
});

gulp.task('images', function() {
    gulp.src('./app/images/**/*')
        .pipe(imageminOptipng({optimizationLevel: 3})())
        .pipe(gulp.dest('./app/dist/images'));
});


gulp.task('sass', function() {
    return gulp.src('./app/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./app/css'))
        .pipe(connect.reload());
});

gulp.task('styles', function() {
    gulp.src('./app/css/styles.css')
        .pipe(concat('styles.css'))
        .pipe(uncss({
            html: ['./app/index.html']
        }))
        .pipe(csso())
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


gulp.task('html', function() {
    gulp.src('./app/index.html')
        .pipe(connect.reload());
});


gulp.task('clean', function(cb) {
    del([
        './app/dist/css/styles.css',
        './app/dist/scripts/app.min.js',
        './app/dist/index.html'
        ], cb);
});


gulp.task('watch', function() {
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch("app/images/*", ['images']);
    gulp.watch("app/*.html");
});

gulp.task('default', ['scripts']);
gulp.task('serve', ['watch', 'sass', 'scripts', 'connect', 'open']);
gulp.task('build', ['jshint', 'sass', 'minifyHTML', 'scripts', 'styles', 'images']);
