var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    del = require('del'),
    usemin = require('gulp-usemin'),
    rev = require('gulp-rev'),
    cssnano = require('gulp-cssnano'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync').create();

gulp.task('previewDist', function() {
  browserSync.init({
    server: {
      baseDir: './dist'
    }
  });
});

gulp.task('deleteDistFolder', function() {
  return del('./dist');
});

gulp.task('optimizeImages', ['deleteDistFolder'], function() {
  return gulp.src('./src/img/**/*')
    .pipe(imagemin({
      progressive: true,//jpg
      interlaced: true,//gif
      multipass: true//svg
    }))
    .pipe(gulp.dest('./dist/img'));
});

gulp.task('usemin', ['deleteDistFolder'], function() {
  return gulp.src('./src/*.html')
    .pipe(usemin({
      css: [
        //revision
        function() {
          return rev();
        },
        //minify
        function() {
          return cssnano();
        }
      ],
      js: [
        //revision
        function() {
          return rev();
        },
        //minify
        function() {
          return uglify();
        }
      ]
    }))
    .pipe(gulp.dest('./dist'));
});


gulp.task('build', ['deleteDistFolder','optimizeImages', 'usemin']);