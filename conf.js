// conf.js
var jasmineReporters = require('jasmine-reporters');
var SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
    allScriptsTimeout: 15 * 1000,
    getPageTimeout: 10 * 1000,
    jasmineNodeOpts: {
        defaultTimeoutInterval: 60 * 1000,
        showColors: true,
        print: function () {}
    },
    //rootElement: 'app-root',
    //ignoreSynchronization:true,
    //useAllAngular2AppRoots: true,
    framework: 'jasmine2',
    directConnect: true,
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    suites: {
        all: 'specs/*_spec.js'
    },
    capabilities: { 
        browserName: 'chrome'
    },
    onPrepare: function () {
        // add jasmine-spec-reporter
        jasmine.getEnv().addReporter(
            new SpecReporter({
                displayStacktrace: 'specs', // display stacktrace for each failed assertion, values: (all|specs|summary|none)
                displayPendingSpec: true, // display each pending spec
                displaySpecDuration: true, // display each spec duration

            })
        );
    }
}