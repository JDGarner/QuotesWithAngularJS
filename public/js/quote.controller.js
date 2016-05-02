quotesApp.controller('QuoteController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){

	
	$scope.getQuotes = function(){
		$http.get('/api/quotes').success(function(data, status, headers, config){
			$scope.quotes = data;
		}).
		error(function(data, status, headers, config) {
	    	$scope.name = 'Error!'
	  	});
	}

	$scope.getQuote = function(){
		var id = $routeParams.id;
		$http.get('/api/quotes/' + id).success(function(response){
			$scope.quote = response;
		});
	}

	$scope.getRandomQuote = function(){
		$http.get('/api/random_quote').success(function(response){
			$scope.quote = response[0];
		});
	}

	$scope.addQuote = function(){
		var id = $routeParams.id;
		$http.post('/api/quotes/', $scope.quote).success(function(response){
			window.location.href = "/";
		});
	}

	$scope.updateQuote = function(){
		var id = $routeParams.id;
		$http.put('/api/quotes/' + id, $scope.quote).success(function(response){
			window.location.href = "/";
		});
	}

	$scope.removeQuote = function(id){
		$http.delete('/api/quotes/' + id).success(function(response){
			window.location.href = "/";
		});
	}

	// Called when ng-repeat is finished to add bullet dividers to all but last quote
  	$scope.onEnd = function(){
		$('.allQuotes:not(:last-child)').append("<span class='bulletDivider'>&bull;</span>");
	};
}]);

// Add directive to be called when ng-repeat is finished
quotesApp.directive("repeatEnd", function(){
    return {
        link: function (scope, element, attrs) {
            if (scope.$last) {
                scope.$eval(attrs.repeatEnd);
            }
        }
    };
});