var gulp = require('gulp'),
    svg2png = require('gulp-svg2png');

gulp.task('svg2png', function () {
    return gulp.src('./src/img/**/*.svg')
        .pipe(svg2png())
        .pipe(gulp.dest('./src/img'));
});