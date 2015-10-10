import gulp        from 'gulp'
import browserSync from 'browser-sync'

const reload = browserSync.reload

gulp.task('watch', () => {
  browserSync.init({
    notify: false, // strongly recommened to set it false for printing purpose
    startPath: 'examples/receipt.html', // you can change the path or ommit this line
    server: {
      baseDir: "./"
    }
  })
  gulp.watch(['**/*.html', '**/*.css'], reload)
})
