'use strict';


angular.module('app').controller('AppController', ['$scope', 'appService', 'growl', 'Upload',
	function($scope, appService, growl,  Upload) {
		// This provides Authentication context.
		$scope.cities = [
			{
				"cityName": "Mumbai",
				"location": "94089"
			},
			{
				"cityName": "Pune",
				"location": "94089"
			},
			{
				"cityName": "Chennai",
				"location": "94089"
			},
			{
				"cityName": "Banglore",
				"location": "94089"
			}
		];
		$scope.getWeather = function(data){
			appService.get({url: 'weather', id: data}).$promise.then(function(data) { 
		        $scope.weather = data.temp;
		    }).catch(function(error){
		        growl.addErrorMessage('oops something went wrong');
		    });
		}
	}
]);