var gulp = require('gulp');
var sass = require('gulp-sass');
var browserify = require('gulp-browserify');
var browserSync = require('browser-sync').create();
var sourcemaps = require('gulp-sourcemaps');
var vueify = require('gulp-vueify')

gulp.task('build-html', function() {
	gulp.src('index.html')
		.pipe(gulp.dest('./dist/'));
});

gulp.task('build-vue', function() {
    gulp.src('./components/**/*.vue')
        .pipe(vueify())
        .pipe(gulp.dest('./scripts/components/'));
});

gulp.task('build-js', function() {
	gulp.src('./scripts/main.js')
        .pipe(browserify())
		.pipe(gulp.dest('./dist/script/'));
});

gulp.task('build-css', function() {
    gulp.src('./sass/main.scss')
    	.pipe(sourcemaps.init())
    	.pipe(sass())
    	.pipe(sourcemaps.write())
    	.pipe(gulp.dest('./dist/style/'));
});

gulp.task('build-images', function() {
    gulp.src('./images/**/*')
        .pipe(gulp.dest('./dist/images/'));
});

gulp.task('watcher',['build-css', 'build-vue', 'build-html',
                         'build-images', 'build-js'], function() {
    gulp.watch('./sass/**/*.scss', ['build-css']);
    gulp.watch('./scripts/**/*.js', ['build-js']);
    gulp.watch('index.html', ['build-html']);
    gulp.watch('./components/**/*.vue', ['build-vue']);
    gulp.watch('./dist/**/*').on('change', browserSync.reload);
});

gulp.task('serve',['watcher'], function() {
    browserSync.init({
    	server: {
    		baseDir: './dist',
    		open: true
    	}
    })
});