let gulp = require('gulp')
let autoprefixer = require('gulp-autoprefixer')

gulp.task('styles', function() {
    gulp.src('css/stylesheet.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('build'))
});