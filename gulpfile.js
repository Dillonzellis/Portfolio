const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const terser = require("gulp-terser");
const browsersync = require("browser-sync");

// Sass Task
function scssTask() {
  return src("app/scss/style.scss", { sourcemaps: true })
    .pipe(sass())
    .pipe(postcss([cssnano]))
    .pipe(dest("dist", { sourcemaps: "." }));
}

// Default Gulp Task
exports.default = scssTask;
