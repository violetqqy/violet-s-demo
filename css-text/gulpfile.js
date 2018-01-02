/**
 * Created by qqy on 15/11/17.
 */

var gulp = require('gulp'),
    connect = require('gulp-connect'),
//sass = require('gulp-sass'),
    compass = require('gulp-compass'),
    minifyCSS = require('gulp-minify-css');

gulp.task('server', function () {
    connect.server({
        port: 5000,
    });
});

//gulp.task('sass', function () {
//    gulp.src('./**/sass/*.scss')
//        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
//        .pipe(gulp.dest('./'))
//        .pipe(connect.reload());
//});

gulp.task('compass', function () {
    gulp.src('./sass/*.scss')
        .pipe(compass({
            config_file: './config.rb',
            css: 'stylesheets',
            sass: 'sass'
            //image: 'images'
            //javascript: 'javascript'
        }))
        .on('error', function (error) {
            // Would like to catch the error here
            console.log(error);
            this.emit('end');
        })
        //.pipe(minifyCSS())
        .pipe(gulp.dest('stylesheets'));
});

gulp.task('watch', function () {
    gulp.watch('./sass/*.scss', ['compass']);
});

gulp.task('default', ['server', 'compass', 'watch']);