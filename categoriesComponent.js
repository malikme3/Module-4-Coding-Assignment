(function() {
  'use strict'

  angular.module('MenuResturantApp')
    .component('categories', {
      templateUrl: 'templates/categories.template.html',
      bindings: {
        categories: '<'
      }
    })
})()
