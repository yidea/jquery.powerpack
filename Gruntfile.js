module.exports = function(grunt) {
  // config task
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    browserify: {
      client: {
        src: ["lib/jquery.powerpack.js"],
        dest: "dist/jquery.powerpack.browser.js",
        options: {
          transform: ["literalify"]
        }
      }
    },

    watch: {
      scripts: {
        files: ["lib/jquery.powerpack.js"],
        tasks: ["browserify:client"]
      }
    }
  });

  // plugin task
  grunt.loadNpmTasks("grunt-browserify");
  grunt.loadNpmTasks('grunt-contrib-watch');

  // custom task
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
