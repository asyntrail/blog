var gulp = require('gulp');
    autoprefixer = require('gulp-autoprefixer'),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect');

//task connect

gulp.task('connect', function() {
  connect.server({
    root: '',
    livereload: true
  });
});


//css
        gulp.task('css', function() {
        gulp.src('./css/style.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist'))
        .pipe(connect.reload());
});

//html
        gulp.task('html', function() {
        gulp.src('./index.html')
        .pipe(connect.reload());
})

//watch
gulp.task('watch' , function() {
gulp.watch('./css/style.css' , ['css'])
gulp.watch('./index.html' , ['html'])
})

//default
gulp.task('default', ['connect','html','css','watch']);