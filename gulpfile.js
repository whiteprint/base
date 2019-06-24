const gulp = require('gulp');
const postcss = require('gulp-postcss');

// process CSS
gulp.task('postcss', function () {
  return gulp.src('./src/index.css')
    .pipe(postcss())
    .pipe(gulp.dest('./'));
});

// watching
gulp.task('watch:postcss', function() {
  return gulp.watch(['./src/**/*.css'],
  gulp.series('postcss'));
});

gulp.task('watch', gulp.parallel('watch:postcss'));

// deafult task
gulp.task('default', gulp.parallel('watch'));
