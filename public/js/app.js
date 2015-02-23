define(['angularAMD', 'ui-router'], function(angularAMD){

    var app = angular.module('app', ['ui.router']);

    return angularAMD.bootstrap(app);

});
