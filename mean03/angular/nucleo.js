angular.module('MainApp', []);

function controladorPrincipal($scope, $http){
	$scope.usuarios = {};

	$scope.Usuario = {};
	$scope.User = {};

	/*$http.get('./api/usuarios').success(function(data){
		$scope.usuarios = data;
	}).error(function(data){
		console.log("Error : "+data);
	});*/

	$scope.lookforUsuario = function(usuario){
		$http.post('/api/usuarios', $scope.Usuario).success(function(data){
			$scope.Usuario = {};
			location.href="api/dos";
			/*$http.get('/api/getthem').success(function(data){
				$scope.usuarios = data;
			}).error(function(data){
				console.log("no... "+data);
			});*/
                    		}).error(function(data){
			console.log("nucleo js dice : "+data);
		});
	};

	$scope.createUsuario = function(){
		$http.post('/api/crear',$scope.User).success(function(data){
			$scope.User = {};
		}).error(function(data){
			console.log("nucleo js dice: "+ data);
		});
	};

	$scope.deleteUsuario = function(){
		$http.post('/api/delete',$scope.User).success(function(data){
			$scope.User = {};
		}).error(function(data){
			console.log("nucleo js dice: "+data);
		});
	};

}
