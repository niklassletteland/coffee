'use strict';

module.exports = function (grunt) {

    // Load all grunt tasks
    // replaces: grunt.loadNpmTasks(...)
    require('load-grunt-tasks')(grunt);


    ///////////////////////////////////////////
    // INIT CONFIG
    ///////////////////////////////////////////
    grunt.initConfig({

        // Read in project settings from package.json
        pkg: grunt.file.readJSON('package.json'),


        /////////////////////////////////////////////////////
        // CONFIG ENV VARIABLES
        /////////////////////////////////////////////////////
        env: {
            dev: {
                NODE_ENV: 'development',
                DEST: 'temp'
            },
            build: {
                NODE_ENV: 'production',
                DEST: 'dist'
            }
        },



        /////////////////////////////////////////////////////
        // CONCATENATE AND COMPRESS FOR BUILD
        /////////////////////////////////////////////////////
        uglify: {
            options: {
                // the banner is inserted at the top of the output
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                // the files to concatenate
                src: [
                    // Lib Dependencies
                    'app/bower_components/jquery/jquery.min.js',
                    'app/bower_components/select2/select2.min.js',
                    'app/bower_components/angular/angular.min.js',
                    'app/bower_components/angular-ui-router/release/angular-ui-router.js',
                    'app/bower_components/angular-resource/angular-resource.min.js',
                    'app/bower_components/angular-local-storage/angular-local-storage.min.js',
                    'app/bower_components/angular-gettext/dist/angular-gettext.min.js',
                    'app/bower_components/angular-ui-select2/src/select2.js',
                    // App Dependencies
                    'app/scripts/app.js',
                    'app/scripts/translate/translations.js',
                    'app/scripts/controller/controllers.js',
                    'app/scripts/factory/tenantFactory.js',
                    'app/scripts/factory/dateFactory.js',
                    'app/scripts/factory/loginFactory.js',
                    'app/scripts/factory/orderFactory.js',
                    'app/scripts/factory/patientFactory.js',
                    'app/scripts/factory/productFactory.js',
                    'app/scripts/factory/userFactory.js',
                    'app/scripts/filter/filters.js',
                    'app/scripts/directive/directives.js'
                ],
                // the location of the resulting JS file
                dest: 'app/scripts/<%= pkg.name %>.min.js'
            }
        },


        /////////////////////////////////////////////////////
        // FRONT END (ANGULAR) TESTING WITH KARMA/JASMINE
        /////////////////////////////////////////////////////
        karma: {
            options: {
                basePath : '',
                files : [
                    'app/bower_components/angular/angular.js',
                    'app/bower_components/angular-route/angular-route.js',
                    'app/bower_components/angular-mocks/angular-mocks.js',
                    'app/scripts/*.js',
                    'app/scripts/*.js',
                    'app/scripts/**/*.js',
                    'test/unit/client/*.js',
                    'test/unit/client/**/*.js'
                ],
                frameworks: ['jasmine'],
                browsers : ['PhantomJS'],
                plugins : [
                    'karma-phantomjs-launcher',
                    'karma-jasmine'
                ],
                junitReporter : {
                    outputFile: 'test_out/unit.xml',
                    suite: 'unit'
                }
            },
            watch: {
                autoWatch : true
            },
            build: {
                singleRun: true
            },
            single: {
                singleRun: true
            }
        },


        /////////////////////////////////////////////////////
        // CONFIG BACK END TESTING WITH MOCHA
        /////////////////////////////////////////////////////
        mochaTest: {
            test: {
                options: {
                    reporter: 'spec'
                },
                src: ['test/unit/server/*.js']
            }
        }

    }); //end grunt.initConfig()



    ///////////////////////////////////////////
    // SETUP BUILD
    ///////////////////////////////////////////
    grunt.registerTask('build', [
        //'uglify',
        'karma:build'
        // put other build tests here
    ]);


    ///////////////////////////////////////////
    // TEST
    ///////////////////////////////////////////
    // run entire test suite
    grunt.registerTask('test', [
        'karma:single',
        'mochaTest'
        // put other tests here (E2E, Mocha for backend)
    ]);

    // run only unit tests
    grunt.registerTask('test:unit', [
        'karma:single',
        'mochaTest'
    ]);

    // run only client-side unit tests
    grunt.registerTask('test:unit:client', [
        'karma:single'
    ]);

    // run only server-side unit tests
    grunt.registerTask('test:unit:server', [
        'mochaTest'
    ]);

    // run E2E tests
    grunt.registerTask('test:E2E', [

    ]);

    grunt.registerTask('mocha', [
        'mochaTest'
    ]);

    grunt.registerTask('dev', [
        'env:dev',
        'test'
    ]);


    ///////////////////////////////////////////
    // DEFAULT TASKS
    ///////////////////////////////////////////
    // Default task(s) when you run 'grunt' from the cmd line
    grunt.registerTask('default', ['build']);


};