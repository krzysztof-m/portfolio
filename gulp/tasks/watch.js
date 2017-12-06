var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();

gulp.task('watch', function() {
  
  browserSync.init({
    server: {
      baseDir: './src'
    }
  });
  
  watch('./src/**/*.html', function() {
    browserSync.reload();
  });
  
  watch('./src/scss/**/*.scss', function() {
    gulp.start('cssInject');
  });
});

gulp.task('cssInject', ['styles'], function() {
  return gulp.src('./src/css/*.css')
    .pipe(browserSync.stream());
});