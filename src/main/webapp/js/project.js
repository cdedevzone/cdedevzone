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
				if ($scope.input != null && $scope.input.length > 0) {
					$http.get(
							"/_ah/api/helloworld/v1/hellogreeting/"
									+ $scope.input).then(function(response) {
						$scope.result = response.data.message;
					});
				}
			}

			$scope.add = function() {
				$scope.message = "Button clicked."
				$http.get(
						"_ah/api/items/v1/add/" + $scope.name + "/"
								+ $scope.description).then(function(response) {
					$scope.get();
				});
			}

			$scope.get = function() {
				$http.get("_ah/api/items/v1/get/").then(function(response) {
					$scope.message = response;
					$scope.items = response.data.items;
				});
			}
		});