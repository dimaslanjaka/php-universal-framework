const gulp = require("gulp");
const ts = require("gulp-typescript");
const rename = require("gulp-rename");
const process = require('process');
const fs = require('fs');
const config = require('./config.json');

/**
 * Build to /src/MVC/themes/assets/js/app.js
 * Minify Views Assets
 */
gulp.task('build', function () {
  const core = require('./libs/compiler/core');
  const log = core.log;
  var tsProject = ts.createProject(__dirname + "/tsconfig.build.json");
  var processTSC = tsProject.src()
    .pipe(tsProject())
    .pipe(rename(function (path) {
      path.extname = ".js";
    }))
    .pipe(gulp.dest("./src/MVC/themes/assets/js/"));
  processTSC.on("end", function () {
    minify(core.normalize(process.cwd() + '/src/MVC/themes/assets/js/app.js'));
    multiMinify(views());
  });
  return processTSC;
});

gulp.task('build-compiler', function () {
  var tsProject = ts.createProject(__dirname + "/tsconfig.compiler.json");
  var processTSC = tsProject.src()
    .pipe(tsProject())
    .pipe(rename(function (path) {
      path.extname = ".js";
    }))
    .pipe(gulp.dest("./libs/compiler/"));
  return processTSC;
});

gulp.task('merge', function () {
  const core = require('./libs/compiler/core').core;
  return core.async(function () {
    const root_pkg = require("./package.json");
    const gui_pkg = require("./libs/gui/package.json");
    const compiler_pkg = require("./libs/compiler/package.json");

    Object.assign(root_pkg.dependencies, gui_pkg.dependencies, compiler_pkg.dependencies);
    Object.assign(root_pkg.devDependencies, gui_pkg.devDependencies, compiler_pkg.devDependencies);
    console.log(root_pkg);
  });
});

// watch libs/js/**/* and views
gulp.task("watch", function () {
  gulp.watch(["./libs/js/**/*", "./" + config.app.views + "/**/*"])
    .on('change', function (file) {
      minify(file);
    });
});

gulp.task('composer', function () {
  const core = require('./libs/compiler/core');
  const log = core.log;
  return core.async(function () {
    var today = new Date().toLocaleDateString();
    var yesterday = new Date(new Date().setDate(new Date().getDate() - 1)).toLocaleDateString();
    if (!core.localStorage().getItem('composer') || core.localStorage().getItem('composer') == yesterday) {
      core.composer(core.root(), 'update');
      core.localStorage().setItem('composer', today);
    } else {
      today = new Date(today);
      yesterday = new Date(core.localStorage().getItem('composer'));
      log('Composer already updated at ' + yesterday);
      log('Today ' + today);
      log('Is Older ' + today.getTime() > yesterday.getTime());
    }
  });
});

gulp.task('default', gulp.series('watch'));

/**
 * minify assets
 * @param {string} file
 */
function minify(item) {
  const core = require('./libs/compiler/core');
  const log = core.log;
  fs.exists(item, function (exists) {
    if (exists) {
      var config = '/src/MVC/config/' + item.replace(core.root(), '');
      config = core.normalize(core.root() + config);
      config = config.replace(/\.(js|css)/s, '.json');
      if (fs.existsSync(config)) {
        config = require(config);
      }
      if (item.endsWith('.scss') && !item.endsWith('.min.scss')) {
        core.scss(item);
      } else if (item.endsWith('.css') && !item.endsWith('.min.css')) {
        core.minCSS(item);
      } else if (item.endsWith('.js') && !item.endsWith('.min.js')) {
        if (!item.endsWith('.babel.js')) {
          core.minJS(item);
          var deleteObfuscated = false;
          if (typeof config == 'object') {
            if (config.hasOwnProperty('obfuscate')) {
              if (config.obfuscate) {
                core.obfuscate(item);
              } else {
                deleteObfuscated = true;
              }
            } else {
              deleteObfuscated = true;
            }
          }
          if (deleteObfuscated) {
            var obfuscatedjs = item.replace(/\.js$/s, '.obfuscated.js');
            var obfuscatedminjs = item.replace(/\.js$/s, '.obfuscated.min.js');
            core.unlink(obfuscatedjs);
            core.unlink(obfuscatedminjs);
          }
        }
      }
    }
  });
}

/**
 * List views folder
 */
function views() {
  const core = require('./libs/compiler/core');
  const log = core.log;
  var views = core.readdir(__dirname + `/${config.app.views}`);
  return views.filter(function (item) {
    return /\.(js|scss|css|sass|less)$/.test(item) && !/\.min\.(js|css)$/.test(item) && !/\-ori|\-original|\-backup|\.bak/s.test(item);
  }).map(function (asset) {
    return core.normalize(asset);
  });
}

/**
 * minify multiple assets
 * @param {any[]} assets
 */
function multiMinify(assets) {
  assets.map(minify);
}