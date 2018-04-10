var gulp = require('gulp');
var pug  = require('gulp-pug');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var gulp_watch_pug = require('gulp-watch-pug');
var browserSync = require('browser-sync').create();

gulp.task('index', function() {
  return gulp.src('app/*.pug')
  .pipe(watch('app/*.pug'))
  .pipe(gulp_watch_pug('app/*.pug'))
  .pipe(pug())
  .pipe(gulp.dest('build'))
  .pipe(browserSync.reload({stream: true}))
});

gulp.task('pug', function(){
  return gulp.src('app/tmpl/**/*.pug')
  .pipe(watch('app/tmpl/**/*.pug'))
  .pipe(gulp_watch_pug('app/tmpl/**/*.pug'))
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

gulp.task('img', function() {
  return gulp.src(['app/assets/img/*.png', 'app/assets/img/*.jpg', 'app/assets/img/*.gif'])
  .pipe(gulp.dest('build/assets/img'))
  .pipe(browserSync.reload({stream: true}))
});

gulp.task('font', function() {
  return gulp.src(['app/assets/fonts/**/*.eot', 'app/assets/fonts/**/*.svg', 'app/assets/fonts/**/*.ttf', 'app/assets/fonts/**/*.woff', 'app/assets/fonts/**/*.woff2'])
  .pipe(gulp.dest('build/assets/fonts'))
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

gulp.task('watch', ['index', 'pug', 'sass', 'img', 'js', 'font', 'browserSync'], function(){
  gulp.watch('app/*.pug', ['pug']);
  gulp.watch('app/tmpl/**/*.pug', ['pug']);
  gulp.watch('app/assets/scss/*.scss', ['sass']);
  gulp.watch('app/assets/scss/**/*.scss', ['sass']);
  gulp.watch('app/assets/js/*.js', ['js']);
});
