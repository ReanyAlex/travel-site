var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssVars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    cssImport = require('postcss-import');

//this is called by the gulp watch function in watch.js file
gulp.task("styles", function() {
  return gulp.src('./app/assets/styles/styles.css')
  //different plugins that add functionality to postcss
  .pipe(postcss([cssImport, autoprefixer, cssVars, nested]))
  .pipe(gulp.dest('./app/temp/styles'))
})
