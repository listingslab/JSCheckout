/**
 * Aligent CheckItOut Develop
 *
 * @category   Aligent
 * @package    aligent-checkitout
 * @copyright  Copyright (c) 2017 Aligent
 * @author     Chris Dorward <chris.dorward@aligent.com.au>
 *
 * gulpfile.js
 * Handles transpiling of ES6 and Sass preprocessing
 *
 */

const JSfileName = 'aligent-checkitout';
const CSSfileName = 'aligent-checkitout';

// To copy the files to the correct place in your magento install, adjust these paths
// const JSfileDestination = './magento-root/js/aligent/checkitout';
// const CSSfileDestination = './magento-root/skin/frontend/base/default/css/aligent/checkitout';

const JSfileDestination = '/vagrant/swg-magento/js/aligent/checkitout';
const CSSfileDestination = '/vagrant/swg-magento/skin/frontend/base/default/css/aligent/checkitout';


const gulp        = require ('gulp');
const babelify    = require ('babelify');
const browserify  = require ('browserify');
const browserSync = require('browser-sync').create();
const connect     = require ('gulp-connect');
const notify      = require ("gulp-notify");
const sass        = require ('gulp-sass');
const source      = require ('vinyl-source-stream');
const buffer      = require ('vinyl-buffer');
const sourcemaps  = require ('gulp-sourcemaps');
const rename      = require ('gulp-rename');
const uglify      = require ('gulp-uglify');
const uglifycss   = require ('gulp-uglifycss');

gulp.task('default',['init']);

// Watch src/js & src/scss directories for changes
gulp.task('init', ['js', 'js_min', 'css', 'css_min'], function() {
  gulp.watch('src/**/*.js', ['js', 'js_min']);
  gulp.watch('src/**/*.scss', ['css', 'css_min']);
  gulp.watch('stanadlone/*.html', ['inject']);
  browserSync.init({
    server: "./standalone"
  });
});

// inject html
gulp.task('inject', () => gulp.src('standalone/*.html')
  .pipe(browserSync.stream())
);


// Transpile JavaScript & copy to destinations
gulp.task('js', function(){
  return browserify({
    debug: true,
    entries: ['./src/js/Main.js']
  })
    .transform(babelify.configure({
      presets: ['es2015'],
      sourceMapsAbsolute: true,
    }))
    .bundle()
    .on("error", notify.onError(function (error) {
      return "Error: " + error.message;
    }))
    .pipe(source(`${JSfileName}.js`))
    .pipe(buffer())
    .pipe(gulp.dest('./standalone/js'))
    .pipe(gulp.dest(JSfileDestination))
    .pipe(browserSync.stream())
});

// Minify JavaScript & create sourcemap
gulp.task('js_min', function(){
  return browserify({
    debug: true,
    entries: ['./src/js/Main.js']
  })
    .transform(babelify.configure({
      presets: ['es2015'],
      sourceMapsAbsolute: true,
    }))
    .bundle()
    .on("error", notify.onError(function (error) {
      return "Error: " + error.message;
    }))
    .pipe(source(`${JSfileName}.min.js`))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./standalone/js'))
    .pipe(gulp.dest(JSfileDestination))
    .pipe(browserSync.stream())
});

// Pre-process Sass into CSS3 & copy to build/css/ with a sourcemap
gulp.task('css', () => gulp.src('src/scss/*.scss')
  .pipe(sass({source: 'styles.css'}))
  .on("error", notify.onError(function (error) {
    return "Error: " + error.message;
  }))
  .pipe(rename(`${CSSfileName}.css`))
  .pipe(gulp.dest('standalone/css'))
  .pipe(gulp.dest(CSSfileDestination))
  .pipe(browserSync.stream())
);

// Pre-process Sass into minified CSS3 & with sourcemap
gulp.task('css_min', () => gulp.src('src/scss/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({source: 'styles.css'}))
  .on("error", notify.onError(function (error) {
    return "Error: " + error.message;
  }))
  .pipe(rename(`${CSSfileName}.min.css`))
  .pipe(sourcemaps.write('.'))
  .pipe(uglifycss({
    "maxLineLen": 80,
    "uglyComments": true
  }))
  .pipe(gulp.dest('standalone/css'))
  .pipe(gulp.dest(CSSfileDestination))
  .pipe(browserSync.stream())
);
