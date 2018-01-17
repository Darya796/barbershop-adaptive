var gulp = require("gulp");
// var rename = require("gulp-rename");
var plumber = require("gulp-plumber");
var less = require("gulp-less");
// var minify = require("gulp-csso");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
// var mqpacker = require("css-mqpacker");
// var imagemin = require("gulp-imagemin");
var server = require("browser-sync");
// var run = require("run-sequence");
// var del = require("del");


gulp.task("style", function() {
  gulp.src("less/style.less")
  .pipe(plumber())
  .pipe(less())
  .pipe(postcss([
    autoprefixer({browsers: [
      "last 1 version",
      "last 2 Chrome versions",
      "last 2 Firefox versions",
      "last 2 Opera versions",
      "last 2 Edge versions"
    ]})
    // ,
    // mqpacker({
    //   sort: true
    // })
  ]))
  .pipe(gulp.dest("css"))
  // .pipe(minify())
  // .pipe(rename("style.min.css"))
  // .pipe(gulp.dest("css"))
  .pipe(server.reload({stream: true}));
});

// gulp.task("images", function() {
//   return gulp.src("img/**/*.{png,jpg,gif}")
//   .pipe(imagemin([
//     imagemin.optipng({optimizationLevel: 3}),
//     imagemin.jpegtran({progressive: true})
//   ]))
//   .pipe(gulp.dest("img"));
// });

gulp.task("start", ["style"], function() {
  server.init({
    server: "."
  });

  gulp.watch("less/**/*.less", ["style"]);
  gulp.watch("*.html")
  .on("change", server.reload);
});

// gulp.task("build", function(fn) {
//   run("style", "images", fn);
// });

// gulp.task("copy", function() {
//   return gulp.src([
//     "fonts/**/*.{woff,woff2}",
//     "img/**",
//     "js/**",
//     "*.html"
//   ], {
//     base: "."
//   })
//   .pipe(gulp.dest("build"));
// });

// gulp.task("clean", function() {
//   return del("build");
// });
