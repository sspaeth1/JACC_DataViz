const gulp = require('gulp');
const terser = require('gulp-terser');
// const terser = require('gulp-uglify-es').default;
const sass = require ('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const replace = require('gulp-replace');


// top level functions
// gulp.task   // define tasks
// gulp.src    // point to files to use
// gulp.dest   // point to foder to output
// gulp.watch


gulp.task('message', function(done){
    console.log('gulp is running ...')
    done();
});


// copy all html files
gulp.task('copyHTML', function (done){
    gulp.src('src/*.html')
    .pipe(gulp.dest('dist'))
    .on('end', done);
})

//copy js/Css/Html files
gulp.task('copyAll', function (done){
    gulp.src('src/*.html')
    .pipe(gulp.dest('dist'))
    gulp.src('src/js/*.js')
    .pipe(gulp.dest('dist/js'))
    gulp.src('src/css/*.css')
    .pipe(gulp.dest('dist/css'))
    gulp.src('src/imgs/*')
    .pipe(gulp.dest('dist/imgs'))
    .on('end', done);
})

// compile Sass
gulp.task('sass', function(done){
    gulp.src('src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'))
        .on('end', done)
})

//condense JS //uglify
    // gulp.task('minifyJS', function(done){
    //     gulp.src('src/js/*.js')
    //         .pipe(uglify())
    //         .pipe(gulp.dest('dist/js/'))
    //         .on('end', done)
    // })

// condense each script and clean console logs/comments

gulp.task('concatEachScript', function(done) {
     gulp.src('src/js/*.js')
          .pipe(terser())
          .pipe(gulp.dest('dist/js'))
          .on('end', done)
        })



//concat js scripts
gulp.task('concatScripts', function(done) {
    return gulp.src('src/js/*.js')
      .pipe(concat('ccdBundle.js'))
      .pipe(terser())
      .pipe(gulp.dest('dist/js'))
      .on('end', function() {
        // Once the JS files are bundled, update HTML files
        gulp.src('src/index_v3.html')
        // .pipe(replace(/src="\.\/js\/.*?\.js"/g, 'src="js/ccdBundle.js"'))
        .pipe(gulp.dest('dist'))
        .on('end', function() {
        console.log('HTML files updated successfully.');
        done();
        });
      });
  });


// gulp.task('default', ['message', 'copyHHTML', 'concatScripts'])
gulp.task('default',gulp.series('message', 'copyHTML', 'sass', 'concatScripts'));

gulp.task('watch', function(){
    gulp.watch('src/*.html',gulp.series('copyHTML'));
    gulp.watch('src/sass/*.scss',gulp.series('sass'));
    gulp.watch('src/js/*.js',gulp.series('concatScripts'));
})