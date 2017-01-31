(function() {
  'use strict'

  angular.module('MenuResturantApp')
    .config(RoutesConfig)

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider']

  function RoutesConfig($stateProvider, $urlRouterProvider) {

    // Redirect if no other URL matches
    $urlRouterProvider.otherwise('/')

    // *** Set up UI states
    $stateProvider

    // Home page
      .state('home', {
      url: '/',
      templateUrl: 'templates/home.template.html'
    })

    // Premade list page
    .state('categories', {
      url: '/categories',
      templateUrl: 'templates/main-categorylist.template.html',
      controller: 'CategoriesController as catctl',
      resolve: {
        categories: ['MenuDataService', function(MenuDataService) {
          return MenuDataService.getAllCategories()
        }]
      }
    })

    .state('categories.items', {
      url: '/{categoryShortName}/items',
      templateUrl: 'templates/items.template.html',
      controller: 'ItemsController as itemctl',
      resolve: {
        items: ['MenuDataService', function(MenuDataService) {
          return MenuDataService.getItemsForCategory("L")
        }]
      }
    })

  }

})()
