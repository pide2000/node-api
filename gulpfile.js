var gulp = require("gulp");
var babel = require("gulp-babel");

gulp.task("default", function () {
    return gulp.src("src/app.tsx")
        .pipe(babel())
        .pipe(gulp.dest("app"));
});