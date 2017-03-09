const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const uglify = require('gulp-uglify');
const argv = require('yargs').argv;
const runSeq = require('run-sequence');
const clean = require('gulp-clean');
const eslint = require('gulp-eslint');

gulp.task('default', ['lint', 'build']);

gulp.task('dev', () => {
  return runSeq('build', 'server', 'watch');
});

gulp.task('build', (callback) => {
  return runSeq('clean', 'js', callback);
});

gulp.task('clean', () => {
  return gulp.src('build/*', { read: false })
    .pipe(clean());
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

gulp.task('lint', () => {
  return gulp.src(['gulpfile.js', 'src/**/*.js', 'examples/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});
