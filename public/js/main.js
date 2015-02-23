(function(){
    require.config({
        paths: {
            'angular': '/bower_components/angular/angular',
            'angularAMD': '/bower_components/angularAMD/angularAMD',
            'ngload': '/bower_components/angularAMD/ngload',
            'ui-router': '/bower_components/ui-router/release/angular-ui-router',
            'ngResource': '/bower_components/angular-resource/angular-resource'
        },
        shim: {
            'angularAMD': ['angular'],
            'ngload': ['angularAMD'],
            'ui-router': ['angular'],
            'ngResource': ['angular']
        },
        deps: ['app']


        
    });
})();
