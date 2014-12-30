module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', 'build');

  grunt.registerTask('build', ['less', 'cssmin']);

  grunt.initConfig({

    less: {
      build: {
        files: {
          'dist/bootstrap-grid-ms.css': 'less/bootstrap-grid-ms.less'
        }
      }
    },

    cssmin: {
      build: {
        files: {
          'dist/bootstrap-grid-ms.min.css': 'dist/bootstrap-grid-ms.css'
        }
      }
    }

  });

};
