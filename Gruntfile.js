module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', 'build');

  grunt.registerTask('build', ['less', 'sass', 'cssmin']);

  grunt.initConfig({

    less: {
      build: {
        files: {
          'dist/bootstrap-grid-ms.css': 'less/bootstrap-grid-ms.less'
        },
        options: {
          modifyVars: {
            'bootstrap-grid-ms-bootstrap-path': '"../bower_components/bootstrap/less/bootstrap"'
          }
        }
      }
    },

    sass: {
      build: {
        files: {
          'dist/bootstrap-and-bootstrap-grid-ms.scss.css': 'scss/bootstrap-and-bootstrap-grid-ms.scss'
        }
      }
    },

    cssmin: {
      build: {
        files: {
          'dist/bootstrap-grid-ms.min.css': 'dist/bootstrap-grid-ms.css',
          'dist/bootstrap-and-bootstrap-grid-ms.scss.min.css': 'dist/bootstrap-and-bootstrap-grid-ms.scss.css'
        }
      }
    }

  });

};
