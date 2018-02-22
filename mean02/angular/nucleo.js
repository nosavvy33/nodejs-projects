angular.module('MainApp', []);

function controladorPrincipal($scope, $http){
	$scope.estadios = {};

	$scope.newEstadio = {};

	$http.get('./api/estadios').success(function(data){
		$scope.estadios = data;
	}).error(function(data){
		console.log("Error : "+data);
	});

	//Agregar una nueva estadio
	$scope.registrarEstadio = function(){
		$http.post('/api/estadio', $scope.newEstadio).success(function (data){
			$scope.newEstadio = {}; //eliminar datos del form
			$scope.estadios = data;
		}).error(function(data){
			console.log("error "+data);
		});
	};

	//objeto de tabla seleccionada
	$scope.selectEstadio = function(estadio){
		$scope.newEstadio = estadio;
		$scope.selected = true;
		console.log($scope.newEstadio, $scope.selected);
	};

	//eliminar estadio
	$scope.borrarEstadio = function( newEstadio ){
		$http.delete('/api/estadio/'+ $scope.newEstadio._id).success(function(data){
			$scope.newEstadio = {};
			$scope.estadios = data;
			$scope.selected = false;
		}).error(function(data){
			console.log("error : "+data);
		});
	};

	//editar estadio
	$scope.modificarEstadio = function(newEstadio){
		$http.put('/api/estadio/'+$scope.newEstadio._id, $scope.newEstadio).success(function(data){
			$scope.newEstadio = {};
			$scope.estadios = data;
			$scope.selected = false;
		}).error(function(data){
			console.log("Error : "+data);
		});
	};

}







