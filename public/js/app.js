var quotesApp = angular.module('quotesApp', ['ngRoute']);

quotesApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'QuoteController',
            templateUrl: 'partials/random_quote.html'
        })

        .when('/quotes/all_quotes', {
            controller: 'QuoteController',
            templateUrl: 'partials/all_quotes.html'
        })

        .when('/quotes/add_quote', {
            controller: 'QuoteController',
            templateUrl: 'partials/add_quote.html'
        })

        .when('/quotes/edit/:id', {
            controller: 'QuoteController',
            templateUrl: 'partials/edit_quote.html'
        })

        .when('/about', {
            templateUrl: '/partials/about.html'
        })

        .otherwise({ redirectTo: '/' });
}]);