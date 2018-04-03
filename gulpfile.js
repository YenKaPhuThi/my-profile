var gulp = require('gulp');
var pug  = require('gulp-pug');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('index', function() {
  return gulp.src('app/*.pug')
  .pipe(pug())
  .pipe(gulp.dest('build'))
  .pipe(browserSync.reload({stream: true}))
});

gulp.task('pug', function(){
  return gulp.src('app/tmpl/**/*.pug')
  .pipe(pug())
  .pipe(gulp.dest('build/tmpl'))
  .pipe(browserSync.reload({stream: true}))
});

gulp.task('sass', function() {
  return gulp.src('app/assets/scss/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('build/assets/css'))
  .pipe(browserSync.reload({stream: true}))
});

gulp.task('js', function() {
  return gulp.src('app/assets/js/*.js')
  .pipe(gulp.dest('build/assets/js'))
  .pipe(browserSync.reload({stream: true}))
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'build'
    }
  })
});

gulp.task('watch', ['index', 'pug', 'sass', 'js', 'browserSync'], function(){
  gulp.watch('app/*.pug', browserSync.reload);
  gulp.watch('app/tmpl/**/*.pug', browserSync.reload);
  gulp.watch('app/assets/scss/*.scss', ['sass']);
  gulp.watch('app/assets/scss/**/*.scss', ['sass']);
  gulp.watch('app/assets/js/*.js', ['js']);
});

