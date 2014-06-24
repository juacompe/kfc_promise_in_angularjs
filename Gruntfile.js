module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        karma: karmaConfig(),
        jshint: jshintConfig(),
    });

    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['jshint', 'karma:ci']);
};

function karmaConfig() {
    var config = {};
    config.options = {};
    config.options.configFile = 'karma.conf.js';
    config.ci = {};
    config.ci.singleRun = true; 
    return config;
}

function jshintConfig() {
    var jshint;
    jshint = {};
    jshint.code = ['static/js/**/*.js'];
    jshint.spec = ['specs/**/*.js'];
    return jshint;
}
