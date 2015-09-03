'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        /**
        *
        * Grunt Variables
        *
        **/

        imports: 'imports/',

        /**
        *
        * End of Grunt Variables
        *
        **/        
        

        less: {
            dev: {
                files: {                   // Target options
                    'assets/css/main.css': [ 'assets/less/main.less']
                },
                options: {
                    compress: false,
                    // LESS source map
                    // To enable, set sourceMap to true and update sourceMapRootpath based on your install
                    sourceMap: true,
                    sourceMapFilename: 'assets/css/main.css.map'
                    // sourceMapRootpath: '/app/themes/roots/'
                }
            },
            build: {
                files: {                       // Target options
                    'assets/css/min/main.min.css': ['assets/less/main.less']
                },
                options: {
                    compress: true
                }
            },
            components: {
                options: {
                    imports: {                       
                        reference: [
                            '<%= imports %>_reset.less',
                            '<%= imports %>_variables.less',
                            '<%= imports %>_mixins.less',
                            '<%= imports %>_grid-system.less',
                            '<%= imports %>_fonts.less',
                            '<%= imports %>_helpers.less'
                        ],
                    }
                },
                files: [
                    { 
                        expand: true, 
                        cwd: 'assets/less/components/', 
                        src: '*.less', 
                        dest: 'assets/less/components/output/', 
                        ext: '.css' 
                    }
                ]
            }
        },
        watch: {
            css: {
                files: [
                    'assets/less/main.less',
                    'assets/less/imports/*.less'
                ],
                tasks: ['less:dev']
            },
            buildComponents: {
                files: [
                    'assets/less/components/main.less'
                ],
                tasks: ['less:components']
            }
        }
    });
    grunt.loadNpmTasks('assemble-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('dev',[
        'less:dev'
    ]);
    grunt.registerTask('build',[
        'less:build'
    ]);
    grunt.registerTask('default',['watch']);
}