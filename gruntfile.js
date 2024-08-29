const { options, watch } = require("less")

module.exports = function(grunt) {
    grunt.initConfig( {
        less: {
            development: {
                options: {
                    compress: true
                },
                files: {
                    "build/styles/main.css" : "src/less/man.less"
                }
            }
        },
        uglify: {
            my_target: {
                files: {
                    'build/js/script.min.js' : ['src/styles/main.js'] 
                }
            }
        },
        watch: {
            less: {
                files: 'src/less/**/*.less',
                taks:['less']
            },
            js: {
                files: 'src/**/*.js',
                tasks: ['uglify']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['less', 'uglify', 'watch']);
};