import { series, src, dest } from 'gulp'
import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import autoprefixer from 'gulp-autoprefixer'
import cleanCSS from 'gulp-clean-css'
import chalk from 'chalk'

const sass = gulpSass(dartSass)

async function buildStyles() {
  return src('./src/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(
      cleanCSS({}, (details) => {
        console.log(
          `${chalk.cyan(details.name)}: ${chalk.yellow(
            details.stats.originalSize / 1024
          )} KB -> ${chalk.green(details.stats.minifiedSize / 1024)} KB`
        )
      })
    )
    .pipe(dest('../../dist/theme-chalk/css'))
}

export default series(buildStyles)
