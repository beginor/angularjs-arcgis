requirejs.config({
    packages: [
        { name: 'dijit', location: 'bower_components/dijit' },
        { name: 'dojo', location: 'bower_components/dojo' },
        { name: 'dojox', location: 'bower_components/dojox' },
        { name: 'dstore', location: 'bower_components/dstore' },
        { name: 'dgrid', location: 'bower_components/dgrid' },
        { name: 'xstyle', location: 'bower_components/xstyle' },
        { name: 'put-selector', location: 'bower_components/put-selector' },
        { name: 'esri', location: 'bower_components/arcgis-js-api' },
        { name: 'moment', location: 'bower_components/moment', main: 'moment' }
    ],
    paths: {
        'angular': 'bower_components/angular/angular',
        'angular-animate': 'bower_components/angular-animate/angular-animate',
        'angular-sanitize': 'bower_components/angular-sanitize/angular-sanitize',
        'angular-resource': 'bower_components/angular-resource/angular-resource',
        'angular-bootstrap': 'bower_components/angular-bootstrap/ui-bootstrap-tpls',
        'angular-ui-router': 'bower_components/angular-ui-router/release/angular-ui-router'
    },
    shim: {
        'angular': { exports: 'angular' },
        'angular-animate': { deps: ['angular'] },
        'angular-resource': { deps: ['angular'] },
        'angular-sanitize': { deps: ['angular'] },
        'angular-bootstrap': { deps: ['angular'] },
        'angular-ui-router': { deps: ['angular'] }
    }
});

require(['angular', 'build/app'], function () {
    angular.bootstrap(document, ['app']);
});