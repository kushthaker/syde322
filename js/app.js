var app = angular.module('mathApp', ['ngRoute', 'ui.bootstrap']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'booleanHandler.html',
		controller: 'booleanHandlerCtrl as ctrl'
	})
	.otherwise({
		redirectTo: '/',
	})

});