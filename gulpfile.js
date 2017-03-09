const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const uglify = require('gulp-uglify');
const argv = require('yargs').argv;
const runSeq = require('run-sequence');
const clean = require('gulp-clean');
const htmlMin = require('gulp-htmlmin');
const gulpif = require('gulp-if');
const webserver = require('gulp-webserver');
const eslint = require('gulp-eslint');

gulp.task('default', ['lint', 'build']);

gulp.task('dev', () => {
  return runSeq('build', 'server', 'watch');
});

gulp.task('build', (callback) => {
  return runSeq('clean', 'html', 'js', callback);
});

gulp.task('clean', () => {
  return gulp.src('build/*', { read: false })
    .pipe(clean());
});

gulp.task('html', () => {
  return gulp.src(['src/*.html'])
    .pipe(gulpif(argv.production, htmlMin({ collapseWhitespace: true })))
    .pipe(gulp.dest('build'));
});

gulp.task('js', () => {
  let stream = browserify({
      entries: './src/js/index.js',
      debug: true,
      standalone: 'james'
    })
    .transform('babelify', { presets: ['es2015'] })
    .bundle()
    .pipe(source('app.js'));

  if (argv.production) {
    stream = stream
      .pipe(buffer())
      .pipe(uglify());
  }

  return stream.pipe(gulp.dest('./build'));
});

gulp.task('watch', () => {
  gulp.watch('./src/js/**/*.js', ['js']);
  gulp.watch('./src/*.html', ['html']);
});

gulp.task('server', () => {
  gulp.src('build')
    .pipe(webserver({
      host: '0.0.0.0',
      port: 8080
    }));
});

gulp.task('lint', () => {
  return gulp.src(['gulpfile.js', 'src/**/*.js', 'examples/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});
