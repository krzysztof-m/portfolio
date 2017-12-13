var gulp = require('gulp'),
    modernizr = require('gulp-modernizr');

gulp.task('modernizr', function() {
  return gulp.src(['./src/css/**/*.css', './src/js/**/*.js'])
        .pipe(modernizr({
          "options": [
            "setClasses"
          ]
        }))
        .pipe(gulp.dest('./src/js'));
});