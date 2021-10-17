const { src, dest, watch, parallel } = require('gulp');

const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const scss = require('gulp-sass');
const uglify = require('gulp-uglify-es').default;
const autoPrefexer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');

function browsersync() {
  browserSync.init({
    server: {
      baseDir: 'src/',
    },
    notify: false
  })
}

function images() {
  return src('src/img/*')
  .pipe(imagemin([
    imagemin.gifsicle({interlaced: true}),
    imagemin.mozjpeg({quality: 75, progressive: true}),
    imagemin.optipng({optimizationLevel: 5}),
    imagemin.svgo({
        plugins: [
            {removeViewBox: true},
            {cleanupIDs: false}
        ]
    })
]))
  .pipe(dest('dist/img'))
}

function scripts() {
  return src([
    'node_modules/jquery/dist/jquery.js',
    'src/js/script.js'
  ])
  .pipe(concat('script.min.js'))
  .pipe(uglify())
  .pipe(dest('src/js'))
  .pipe(browserSync.stream())
}

function styles() {
  return src('src/scss/**/*.scss')
    .pipe(scss({outputStyle: 'compressed'}))
    .pipe(concat('style.css'))
    .pipe(autoPrefexer({
      overrideBrowserslist: ['last 10 version'],
      grid: true
    }))
    .pipe(dest('src/css'))
    .pipe(browserSync.stream())
}

function build() {
  return src([
    'src/css/style.css',
    'src/fonts/**/*',
    'src/js/script.min.js',
    'src/*.html'
  ], {base: 'src'})
  .pipe(dest('dist'))
}

function watching() {
  watch(['src/scss/**/*.scss'], styles)
  watch(['src/js/**/*.js', '!src/js/script.min.js'], scripts)
  watch(['src/*.html']).on('change', browserSync.reload)
}

exports.browsersync = browsersync;
exports.styles = styles;
exports.watching = watching;
exports.scripts = scripts;
exports.build = build;
exports.images = images;

exports.default = parallel(scripts, browsersync, watching);