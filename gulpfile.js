//import { minify } from '../../../../../../../home/kavi/.cache/typescript/2.6/node_modules/@types/uglify-js';

'use strict'

//dependancies
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var changed = require('gulp-changed');

/////////////////
/// - SCSS/CSS
////////////////

var SCSS_SRC = './src/Assets/scss/**/*.scss';
var SCSS_DEST = './src/Assets/css';

//Compile SCSS
gulp.task('compile_scss', function(){

    gulp.src(SCSS_SRC)
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(rename({ suffix: '.min'}))
    .pipe(changed(SCSS_DEST))
    .pipe(gulp.dest(SCSS_DEST));

});

/// ++
// 'pipe' is the linking one task with the other. Chane the task.Like loging the task sass error after that minify the css files etc ... 
/// ++
//detect changes in SCSS (This is gulp task)
gulp.task('watch_scss', function(){
    gulp.watch(SCSS_SRC, ['compile_scss']); //watcher is the one who is watching the relavent folder and run the task call 'compile_scss' task when the that floder modify.YOU can add many task like this =>  gulp.watch(SCSS_SRC, ['compile_scss', 'autoprefix', 'minify']);
});

// Run tasks (This is a default task)
gulp.task('default', ['watch_scss'])

/// ******* Runing the task in gulp ***********
/*
    In the Terminal you can run the gulp by typing "gulp" inside of your relavent folder.
    After that it will seek the default task and in here default task is point to the 'watch_scss'. So 'watch_scss' will run.
    IF you want to run the one single task you can type 'gulp taskName' 
    :)
*/