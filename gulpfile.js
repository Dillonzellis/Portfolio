const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const terser = require("gulp-terser");
const browsersync = require("browser-sync");
const del = require("del");

const concat = require("gulp-concat");

// Sass Task
function scssTask() {
  return src("app/scss/main.scss", { sourcemaps: true })
    .pipe(sass())
    .pipe(postcss([cssnano]))
    .pipe(dest("dist", { sourcemaps: "." }));
}

// JS Task
function jsTask() {
  return src("app/js/**/*.js", { sourcemaps: true })
    .pipe(concat("main.js"))
    .pipe(terser())
    .pipe(dest("dist", { sourcemaps: true }));
}

// Browsersync Tasks
function browsersyncServer(cb) {
  browsersync.init({
    server: {
      baseDir: ".",
    },
  });
  cb();
}

function browsersyncReload(cb) {
  browsersync.reload();
  cb();
}

// Watch Task
function watchTask() {
  watch("*.html", browsersyncReload);
  watch(
    ["app/scss/**/*.scss", "app/js/**/*.js"],
    series(scssTask, jsTask, browsersyncReload)
  );
}

// Deleting dist folder
function cleanDist() {
  return del("./dist");
}

// Default Gulp Task
exports.default = series(scssTask, jsTask, browsersyncServer, watchTask);

exports.cleanDist = cleanDist;
