module.exports = function(grunt) {
  // config task
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    jshint: {
      "build": {
        options: {
          jshintrc: ".jshintrc"
        },
        files: {
          src: [
            "lib/jquery.powerpack.js",
            "!dist/*"
          ]
        }
      }
    },

    browserify: {
      client: {
        options: {
          transform: ["literalify"]
        },
        src: ["lib/jquery.powerpack.js"],
        dest: "dist/jquery.powerpack.browser.js"
      }
    },

    uglify: {
      options: {
        mangle: true, //false to prevent change variable name
        banner: '/*! <%= pkg.name %>.min <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: "dist/jquery.powerpack.browser.js",
        dest: "dist/jquery.powerpack.browser.min.js"
      }
    },

    watch: {
      scripts: {
        files: ["lib/jquery.powerpack.js"],
        tasks: ["jshint:build", "browserify:client"]
      }
    }
  });

  // plugin tasks
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks("grunt-browserify");

  // custome tasks
  grunt.registerTask('dev', ["watch"]);
  grunt.registerTask('build', ["jshint:build", "browserify:client", "uglify"]);

//  var browserify = require('browserify'),
//    literalify = require('literalify'),
//    fs = require("fs");
//  grunt.registerTask("literalify", "covert browserify to browser", function () {
//    grunt.log.writeln('Processing literalify task...');
//    var b = browserify();
//    // map module names with global objects
//    b.transform(literalify.configure({
//      'jquery': 'window.$'
//    }));
//    b.add("lib/jquery.powerpack.js");
//    b.bundle().pipe(fs.createWriteStream('dist/bundle.js'));
//  });
};
