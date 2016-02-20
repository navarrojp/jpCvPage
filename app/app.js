'use strict';

angular.module('jpCvApp', [
  'ui.router'
])
.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    //TODO: Define pages for site
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'home/home.template.html'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'about/about.template.html'
        });
});
