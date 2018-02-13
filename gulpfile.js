const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const uglify = require('gulp-uglify');
const argv = require('yargs').argv;
const runSeq = require('run-sequence');
const clean = require('gulp-clean');
const eslint = require('gulp-eslint');
const conventionalChangelog = require('gulp-conventional-changelog');
const bump = require('gulp-bump');
const gutil = require('gulp-util');
const git = require('gulp-git');
const fs = require('fs');

gulp.task('default', ['lint', 'dist']);

gulp.task('dev', () => {
  return runSeq('dist', 'server', 'watch');
});

gulp.task('dist', (callback) => {
  return runSeq('clean', 'js', callback);
});

gulp.task('clean', () => {
  return gulp.src('dist/*', { read: false })
    .pipe(clean());
});

gulp.task('js', () => {
  return buildJs(argv.production);
});

gulp.task('js_dev', () => buildJs());
gulp.task('js_pro', () => buildJs(true));

gulp.task('lint', () => {
  return gulp.src(['gulpfile.js', 'src/**/*.js', 'examples/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('changelog', () => {
  return gulp.src('CHANGELOG.md', {
    buffer: false
  })
    .pipe(conventionalChangelog({
      preset: 'angular' // Or to any other commit message convention you use.
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('bump-version', () => {
  let type = 'patch';

  if (argv.major) {
    type = 'major';
  } else if (argv.minor) {
    type = 'minor';
  }

  return gulp.src(['./bower.json', './package.json'])
    .pipe(bump({ type })
    .on('error', gutil.log))
    .pipe(gulp.dest('./'));
});

gulp.task('commit-changes', () => {
  const version = getPackageJsonVersion();

  return gulp.src('.')
    .pipe(git.commit(`Bump version number to ${version}`, { args: '-a' }));
});

gulp.task('push-changes', (cb) => {
  git.push('upstream', 'master', cb);
});

gulp.task('create-release-tag', (cb) => {
  const version = getPackageJsonVersion();

  git.tag(`v${version}`, `Release version ${version}`, cb);
});

gulp.task('push-release-tag', (callback) => {
  const version = getPackageJsonVersion();

  git.push('upstream', `refs/tags/v${version}`, callback);
});

gulp.task('commit-release', () => {
  const version = getPackageJsonVersion();

  return gulp.src('./dist')
    .pipe(git.add({ args: '-f' }))
    .pipe(git.commit(`release ${version}`));
});

gulp.task('create-release-branch', (callback) => {
  const version = getPackageJsonVersion();

  git.checkout(`release-${version}`, { args: '-b' }, callback);
});

gulp.task('release', (callback) => {
  runSeq(
    'bump-version',
    'changelog',
    'commit-changes',
    'push-changes',
    'create-release-branch',
    'clean',
    'js_dev',
    'js_pro',
    'commit-release',
    'create-release-tag',
    'push-release-tag',
    (error) => {
      if (error) {
        gutil.log(error.message);
      } else {
        gutil.log('RELEASE FINISHED SUCCESSFULLY');
      }
      callback(error);
    });
});

function getPackageJsonVersion() {
  // We parse the json file instead of using require because require caches
  // multiple calls so the version number won't be updated
  return JSON.parse(fs.readFileSync('./package.json', 'utf8')).version;
}

function buildJs(production) {
  const fileName = production ? 'james-admin-client.min.js' : 'james-admin-client.js';
  let stream = browserify({
      entries: './src/index.js',
      debug: true,
      standalone: 'james'
    })
    .transform('babelify', { presets: ['es2015'] })
    .bundle()
    .pipe(source(fileName));

  if (production) {
    stream = stream
      .pipe(buffer())
      .pipe(uglify());
  }

  return stream.pipe(gulp.dest('./dist'));
}
