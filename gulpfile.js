let gulp = require("gulp")
let sass = require("gulp-sass")
let rename = require("gulp-rename")

function styleFunction(){
    return gulp.src("./sass/*")
        .pipe(sass({
            errorLogToConsole:true,
            outputStyle:"compressed"
        }))
        .on("error" , console.error.bind(console))
        .pipe(rename({suffix:".min"}))
        .pipe(gulp.dest("./css/"))
}

function watchFiles(){
    gulp.watch("./sass/*" , styleFunction)
}

exports.watch = watchFiles
exports.styleFunction = styleFunction
