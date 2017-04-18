/**
 * Created by wanghao on 17/4/15.
 */
var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('copy',function () {
    // console.log("什么鬼");
    gulp.src('src/index01.html').pipe(gulp.dest('dist/'));
});


var cssnano  = require('gulp-cssnano');
gulp.task('style',function () {
    console.log("什么鬼");

    gulp.src('src/style/*.less')
        .pipe(less())
        .pipe(cssnano())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('watch',function () {
    // console.log("什么鬼");
    gulp.watch('src/index01.html',['copy']);
    gulp.watch('src/style/*.css',['style']);
});

var browserSync = require('browser-sync').create();

// Static server
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

