const gulp = require('gulp');


//复制所有的html,css,img,js,font,php
gulp.task('copy-html',function(){
	return gulp.src('./*.html')
	.pipe(gulp.dest('C:\\phpStudy\\PHPTutorial\\WWW\\mobileFQL'));
});
gulp.task('copy-img',function(){
	return gulp.src('img/*')
	.pipe(gulp.dest('C:\\phpStudy\\PHPTutorial\\WWW\\mobileFQL\\img'));
});
gulp.task('copy-font',function(){
	return gulp.src('font/*')
	.pipe(gulp.dest('C:\\phpStudy\\PHPTutorial\\WWW\\mobileFQL\\font'));
});
gulp.task('copy-css',function(){
	return gulp.src('css/*')
	.pipe(gulp.dest('C:\\phpStudy\\PHPTutorial\\WWW\\mobileFQL\\css'));
});
gulp.task('copy-js',function(){
	return gulp.src('js/*')
	.pipe(gulp.dest('C:\\phpStudy\\PHPTutorial\\WWW\\mobileFQL\\js'));
});

//监听
gulp.task('watchAll',function(){
	gulp.watch('./*.html',gulp.series('copy-html'));
	gulp.watch('img/*',gulp.series('copy-img'));
	gulp.watch('font/*',gulp.series('copy-font'));
	gulp.watch('css/*',gulp.series('copy-css'));
	gulp.watch('js/*',gulp.series('copy-js'));
});