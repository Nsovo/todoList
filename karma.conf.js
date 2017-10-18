module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            "spec/**/*.js"
        ],
        exclude: [
        ],
        preprocessors: {
            '**/app/**/*': ['commonjs', 'coverage']
        },
        reporters: ['coverage','progress'],
        coverageReporter: {
            'type': 'html',
            'dir': 'coverage/'
        },

        // web server port
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: true
    });
};