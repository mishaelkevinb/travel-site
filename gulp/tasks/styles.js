var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var cssImport = require('postcss-import');
var mixins = require('postcss-mixins');

gulp.task('styles', function(){
  return gulp.src('./app/assets/styles/styles.css')
  .pipe(postcss([cssImport, mixins, cssvars, nested,  autoprefixer]))
  .on('error',function(errorInfo){ // catch error 
    console.log(errorInfo); // give description of the errors
    this.emit('end'); // allows gulp watch to keep running
    //note: call back function *emit function let the gulp watch know if styles come to an end
  })
  .pipe(gulp.dest('./app/temp/styles'));
  


});