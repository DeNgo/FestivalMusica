import {src, dest, watch} from "gulp"
import * as dartSass from "sass"
import gulpSass from "gulp-sass"

const sass = gulpSass(dartSass)

export function css( done ){
    src("src/scss/app.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(dest("build/css"))

    done()
}

export function dev(){
    watch("src/scss/**/*.scss", css)
}
