angular.module('app', ['ngSanitize'])

angular.module('app')
.controller('IndexCtrl', ['$scope', '$sce', 'DataService', function($scope, $sce, DataService){
	DataService.getData().then(function(res){
		$scope.data = res.data;
	});
	$scope.trustSnippet = function(snippet){
		return $sce.trustAsHtml(snippet);
	}
}])

.service('DataService', ['$http', function($http){
	return {
		getData: function(){
			return $http.get('/data.json')
		}
	}

}])