var gulp = require("gulp");

require("./gulp/test");

gulp.task('build', ['test'], function(done) {
    done();
});

gulp.task('default', ['build']);
