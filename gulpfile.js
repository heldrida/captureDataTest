var gulp = require('gulp');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var gulpWebpack = require('gulp-webpack');
var browserSync = require('browser-sync').create();
var plumber = require('gulp-plumber');
var rename = require("gulp-rename");
var jasmine = require('gulp-jasmine');
var KarmaServer = require('karma').Server;

gulp.task("webpack", function() {
    return gulp.src('./JS/init.js')
    .pipe(rename('bundle.js'))
    .pipe( gulpWebpack(webpackConfig, webpack) )
    .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', function () {

	gulp.watch('./JS/**/*.js', ['testRunner']);
	gulp.watch('./JS/**/*.js', ['webpack']);

	gulp.watch([
		'./dist/bundle.js',
		'./index.html'
	]).on('change', function () {
		browserSync.reload();
	});

});

gulp.task('testRunner', function (done) {
  new KarmaServer({
    configFile: __dirname +  '/karma.conf.js',
    singleRun: true
  }, done).start();
});

gulp.task('serve', ['watch'], function () {

	browserSync.init({
		notify: false,
		server: {
			baseDir: "./"
		}
	});

});