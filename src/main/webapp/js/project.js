angular.module('project', []).controller(
		'ProjectController',
		function($scope, $http) {

			$scope.inputfun = function() {
				return $scope.input;
			};

			$scope.$watch($scope.inputfun, function() {
				fetch();
			});

			function fetch() {
				$http.get(
						"/_ah/api/helloworld/v1/hellogreeting/" + $scope.input)
						.then(function(response) {
							$scope.result = response.data.message;
						});
			}
		});