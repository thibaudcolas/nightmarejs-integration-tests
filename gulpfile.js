var gulp = require("gulp");

require("./gulp/tests");

gulp.task('build', ['tests'], function(done) {
    done();
});

gulp.task('default', ['build']);
