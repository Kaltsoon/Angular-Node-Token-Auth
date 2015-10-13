var gulp = require('gulp');
var babel = require('gulp-babel');
var watch = require('gulp-watch');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var mocha = require('gulp-mocha');
var exec = require('child_process').exec;
var nodemon = require('gulp-nodemon');

const SCRIPT_PATHS = './public/javascripts/';

gulp.task('script', function() {
    gulp.src([SCRIPT_PATHS + 'main.js', SCRIPT_PATHS + '**/*.js'])
        .pipe(concat('scripts.min.js'))
        .pipe(babel())
        .pipe(gulp.dest('./public/dist'));
});

gulp.task('serve', ['script'], function(){
  gulp.watch(SCRIPT_PATHS + '**/*.js', ['script']);
});

gulp.task('test', function(){
  gulp.src('tests/**/*.js')
    .pipe(mocha());
});
