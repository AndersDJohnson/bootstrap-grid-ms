module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', 'build');

  grunt.registerTask('build', ['less', 'sass', 'cssmin', 'template']);

  grunt.initConfig({

    less: {
      build: {
        files: {
          'dist/bootstrap-grid-ms.css': 'less/bootstrap-grid-ms-build.less'
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
    },

    template: {
      options: {

      },
      less: {
        options: {
          data: {
            styles: `
              <link rel="stylesheet" href="../bower_components/bootstrap/dist/css/bootstrap.css" />
              <link rel="stylesheet" href="../dist/bootstrap-grid-ms.css" />
            `
          }
        },
        files: {
          'test/index.html': 'test/index.html.tpl'
        }
      },
      sass: {
        options: {
          data: {
            styles: `
              <link rel="stylesheet" href="../dist/bootstrap-and-bootstrap-grid-ms.scss.css" />
            `
          }
        },
        files: {
          'test/index-sass.html': 'test/index.html.tpl'
        }
      }
    }

  });

};
