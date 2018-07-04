	const myApp=angular.module('homeApp', []);

	myApp.controller("welcomeController", function ($scope) {
			$scope.greetings = 'Hello';
	});

	export default myApp;